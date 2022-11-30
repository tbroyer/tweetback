let data = {
	username: "tbroyer", // No leading @ here
	homeLabel: "blog.ltgt.net",
	homeUrl: "https://blog.ltgt.net/",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(data.homeUrl)}/`;

module.exports = data;
