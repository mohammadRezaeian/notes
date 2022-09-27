const Cache = require("@11ty/eleventy-cache-assets");
require("dotenv").config();

module.exports = async function () {
  let url = `https://api.notion.com/v1/databases/${process.env.NOTION_TEST_ID}/query`;

  let json = await Cache(url, {
    duration: "1d",
    type: "json",
    fetchOptions: {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NOTION_READ_TOKEN}`,
        "Notion-Version": `${process.env.NOTION_VERSION}`,
        "Content-Type": "application/json",
      },
    },
  });

  return {
    json,
  };
};
