const Airtable = require('airtable')
const { writeFileSync, mkdirSync, existsSync } = require('fs')

require('dotenv').config()

const TABLE_COUNT = 'Count'
const TABLE_LOCATION = 'Location'
const TABLE_PROVINCES = 'Provinces'
const OUTPUT_DIR = './src/assets/data/'
const OUTPUT_COUNT = 'count.json'
const OUTPUT_LOCATION = 'location.json'

const base = new Airtable({ apiKey: process.env.AIRTABLE_KEY }).base(
  process.env.AIRTABLE_BASE
)

const fetchRecords = (table) =>
  new Promise((resolve, reject) => {
    let records = []

    table
      .select({
        view: 'Grid view',
      })
      .eachPage(
        (pageRecords, fetchNextPage) => {
          records = [...records, ...pageRecords]

          fetchNextPage()
        },
        (err) => {
          if (err) reject(err)

          resolve(records)
        }
      )
  })

const getCountData = async () => {
  const countRecords = await fetchRecords(base(TABLE_COUNT))

  const count = countRecords.reduce(
    (sum, record) => sum + record.get('count'),
    0
  )
  const lastUpdated =
    countRecords.length > 0
      ? countRecords[countRecords.length - 1].get('date')
      : null

  writeFileSync(
    OUTPUT_DIR + OUTPUT_COUNT,
    JSON.stringify({ count, lastUpdated })
  )
}

const getLocationData = async () => {
  const locationRecords = await fetchRecords(base(TABLE_LOCATION))
  const provinceRecords = await fetchRecords(base(TABLE_PROVINCES))

  const provinceIds = [
    ...new Set(locationRecords.map((record) => record.get('province')[0])),
  ]

  const locations = provinceIds.map((provinceId) => ({
    province: provinceRecords.find(({ id }) => id === provinceId).get('name'),
    points: locationRecords
      .filter((record) => record.get('province')[0] === provinceId)
      .map(({ fields: { province, ...rest } }) => rest),
  }))

  const lastUpdated = locationRecords
    .map((record) => record.get('lastUpdated'))
    .sort()[locationRecords.length - 1]

  writeFileSync(
    OUTPUT_DIR + OUTPUT_LOCATION,
    JSON.stringify({
      provinceCount: provinceIds.length,
      pointCount: locationRecords.length,
      lastUpdated,
      locations,
    })
  )
}

try {
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR)
  }

  Promise.all([getCountData(), getLocationData()])
} catch (err) {
  console.error(err)
  process.exit(1)
}
