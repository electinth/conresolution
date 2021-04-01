const Airtable = require('airtable')
const { writeFileSync, mkdirSync, existsSync } = require('fs')

require('dotenv').config()

const TABLE_COUNT = 'Count'
const TABLE_LOCATION = 'Location'
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

try {
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR)
  }

  fetchRecords(base(TABLE_COUNT)).then((records) => {
    const count = records.reduce((sum, record) => sum + record.get('count'), 0)
    const lastUpdated = records[records.length - 1].get('date')

    writeFileSync(
      OUTPUT_DIR + OUTPUT_COUNT,
      JSON.stringify({ count, lastUpdated })
    )
  })

  fetchRecords(base(TABLE_LOCATION)).then((records) => {
    const provinces = [
      ...new Set(records.map((record) => record.get('province'))),
    ]

    const locations = provinces.map((province) => ({
      province,
      points: records
        .filter((record) => record.fields.province === province)
        .map(({ fields: { province: provinceField, ...rest } }) => rest),
    }))

    const lastUpdated = records
      .map((record) => record.get('lastUpdated'))
      .sort()[records.length - 1]

    writeFileSync(
      OUTPUT_DIR + OUTPUT_LOCATION,
      JSON.stringify({
        provinceCount: provinces.length,
        pointCount: records.length,
        lastUpdated,
        locations,
      })
    )
  })
} catch (err) {
  console.error(err)
  process.exit(1)
}
