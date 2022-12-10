const { Configuration, OpenAIApi } = require("openai");
let handler = async (m, {conn, text}) => {
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: text,
  max_tokens: 2048,

});

m.reply(response.data.choices[0].text);
}
handler.command = /^(ai)$/i
handler.limit = true
handler.premium = true

module.exports = handler
