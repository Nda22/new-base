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

module.exports = handler
