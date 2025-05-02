const axios = require("axios");

const getInstagramOembed = async (req, res) => {
  const { url } = req.query;

  try {
    const response = await axios.get("https://graph.facebook.com/v22.0/instagram_oembed", {
      params: {
        url,
        access_token: '671831842231831' + "|" + '7bc6e98c83e2ecab5b9f8f92fa5afb70',
      },
    });

    res.json(response.data);
  } catch (err) {
    res.status(500).json({ message: err.response?.data || err.message });
  }
};

module.exports = {
  getInstagramOembed,
};
