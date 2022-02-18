import axios from "axios";
export default {
    name: "Helper",
    generateRandomColor() {
        const brightness = 5
        // Six levels of brightness from 0 to 5, 0 being the darkest
        var rgb = [Math.random() * 256, Math.random() * 256, Math.random() * 256];
        var mix = [brightness * 51, brightness * 51, brightness * 51]; //51 => 255/5
        var mixedrgb = [rgb[0] + mix[0], rgb[1] + mix[1], rgb[2] + mix[2]].map(function (x) { return Math.round(x / 2.0) })
        return "rgb(" + mixedrgb.join(",") + ")";
    },
    formatCamelCase(item) {
        if (item == undefined || item == "") {
            return item
        }
        try {
            return (item[0].toUpperCase() + item.slice(1)).replace(/([a-z])([A-Z0-9])/g, '$1\xa0$2')
        } catch (e) {
            return item
        }
    },
    formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    },
    apiCall(url, command, auth, external = false) {
        var profile = auth["profile"]["email"];
        var full_url = this.getURL() + url

        if (external != false) {
            full_url = url
        }
        return auth.getAccessToken().then((accessToken) => {
            return axios
                .get(full_url + "/" + encodeURIComponent(command), {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        Email: profile,
                    },
                })
                .then((response) => {
                    return response.data;
                }).catch(e => {
                    throw "Error " + e.response.status + ": " + e.response.data
                });
        });
    },
    apiDelete(url, command, auth) {
        var profile = auth["profile"]["email"];
        var full_url = this.getURL() + url

        return auth.getAccessToken().then((accessToken) => {
            return axios
                .delete(full_url + "/" + encodeURIComponent(command), {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        Email: profile,
                    },
                })
                .then((response) => {
                    return response.data;
                }).catch(e => {
                    throw "Error " + e.response.status + ": " + e.response.data
                })
        });
    },
    apiPost(url, service, command, auth, arr, isUpload) {
        var profile = auth['profile']['email']
        var full_url = this.getURL() + url

        return auth.getAccessToken().then(accessToken => {
            let headers
            headers = {
                Authorization: `Bearer ${accessToken}`,
                Email: profile,
            }

            if (isUpload != undefined) {
                headers['Content-Type'] = 'multipart/form-data'
            }

            return axios({
                method: 'post',
                url: full_url + service + '/' + command,
                data: arr,
                headers: headers,
            }).then(response => {
                return response.data
            }).catch(e => {
                throw "Error " + e.response.status + ": " + e.response.data
            })
        })
    },
};
