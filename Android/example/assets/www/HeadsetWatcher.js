var HeadsetWatcher = {
	watch: function(callback) {
		return cordova.exec(function(result) {
			HeadsetWatcher.plugged = result.plugged;
			if(callback) {
				callback(result);
			}

		}, HeadsetWatcher.fail, "HeadsetWatcher", "watch", []);
	},
	plugged: false
};
