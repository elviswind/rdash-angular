var getItemsExample = function(body, cheerio, logs, params) {
    // params.nextPageUrl = '';
    var $ = cheerio.load(body, {
        decodeEntities: false
    });
    var listNodes = $('tr');
    if (listNodes === null || listNodes.length === 0) {
        logs.push('empty list');
        return [];
    }
    logs.push('got list, list length is ' + listNodes.length);
    var items = [];
    var ignoredCount = 0;
    var random = parseInt(Math.random() * listNodes.length);
    var links = $(listNodes[random]).find('a');
    logs.push('node ' + random + ' has ' + links.length + ' links, they are: ');
    for (var i = 0; i < links.length; i++) {
        var link = links.eq(i);
        logs.push("[" + i + "] " + link.attr('href') + " " + link.html())
        logs.push($.html(link));
    }
    for (var i = 0; i < listNodes.length; i++) {
        var item = {};
        var n = $(listNodes[i]);

        var a = n.find('a').eq(0);
        var thumbNode = a.find('img');
        if(thumbNode){
            item.thumb = thumbNode.attr('src');
            a = n.find('a').eq(1);
        }
        if (!a || a.length == 0 || !a.attr('href')) {
            ignoredCount++;
            continue;
        }
        item.title = a.text().replace(/^\s+|\s+$/g, '');
        item.link = a.attr('href').replace(/&amp;/g, '&');
        if (item.link) {
            if (item.link.match(/\d+/)) {
                item.tid = item.link.match(/\d+/)[0];
            } else {
                item.tid = 0;
            }
            item.link = url.resolve(params.from, item.link)
        }

        /* your code */

        items.push(item);
    }
    logs.push('ignored ' + ignoredCount);
    return items;
};

var getContentExample = function($, item, extraData, logs) {
    var contentNode = $('content');
    if (contentNode === null || contentNode.length === 0) {
        return null;
    }
    return contentNode.html();
};

var monitorActionExample = function($, logs, callback) {
    var success = false;
    callback(success, logs);
};
