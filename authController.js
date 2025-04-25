const axios = require("axios");

const getInstagramOembed = async (req, res) => {
  const { url, token } = req.query;

  try {
    const response = await axios.get("https://graph.facebook.com/v22.0/oembed_post", {
      params: {
        url,
        access_token: token,
      },
    });

    res.json(response.data);
  } catch (err) {
    res.status(500).json({ message: err.response?.data || err.message });
  }
};

module.exports = {
  getFacebookLoginUrl,
  handleFacebookCallback,
  getInstagramOembed,
};
