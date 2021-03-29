const Airtable = require('airtable')
const { writeFileSync } = require('fs')

require('dotenv').config()

const TABLE_NAME = 'Count'
const FIELD_COUNT = 'Count'
const FIELD_DATE = 'Date'
const OUTPUT_DIR = './src/count.json'

const table = new Airtable({ apiKey: process.env.AIRTABLE_KEY }).base(
  process.env.AIRTABLE_BASE
)(TABLE_NAME)

const fetchRecords = () =>
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

fetchRecords()
  .then((records) => {
    const count = records.reduce(
      (sum, record) => sum + record.get(FIELD_COUNT),
      0
    )
    const lastUpdated = records[records.length - 1].get(FIELD_DATE)

    writeFileSync(OUTPUT_DIR, JSON.stringify({ count, lastUpdated }))
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
