const axios = require("axios");

const getInstagramMedia = async (req, res) => {
    const { access_token } = req.query;

    if (!access_token) {
        return res.status(400).json({ message: "Access token is required" });
    }

    try {
        const response = await axios.get('https://graph.instagram.com/me/media', {
            params: {
                fields: 'id,media_type,media_url,thumbnail_url,permalink',
                access_token: access_token,
            },
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error fetching media:', error);
        res.status(500).json({ message: error.response?.data || error.message });
    }
};


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
  getInstagramMedia,
  getInstagramOembed,
};
