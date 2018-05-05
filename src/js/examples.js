var getItemsExample = function(body, cheerio, logs, params) {
    // params.nextPageUrl = '';
    logs.push(JSON.stringify(params));
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
	
	var pagers = $('.pages a');
    var pager = null;
    for(var i = 0;i<pagers.length;i++){
        if(pagers.eq(i).text().replace(/\s*/g, '') == "下一页"){
            pager = pagers.eq(i);
            break;
        }
    }
    if(pager){
        params.nextPageUrl = url.resolve(params.from, pager.attr('href'));
		logs.push('found next page ' + params.nextPageUrl);
    }
	
    for (var i = 0; i < listNodes.length; i++) {
        var item = {};
        var n = $(listNodes[i]);
        var a = n.find('a').eq(0);

        /******* try get thumbnail ******/
        var thumbNode = a.find('img');
        if(thumbNode && thumbNode.length == 1){
            item.thumb = url.resolve(params.from, thumbNode.attr('src'));
            a = n.find('a').eq(0);
        }
        /********************************/

        if (!a || a.length == 0 || !a.attr('href')) {
            ignoredCount++;
            continue;
        }
        item.title = a.text().replace(/^\s+|\s+$/g, '');
        item.link = a.attr('href').replace(/&amp;/g, '&');
		if (item.link) {
            var tids = item.link.match(/(\d+)\D*$/);
            if (tids && tids.length > 1) {
                item.tid = tids[1];
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

var monitorActionExample = function(body, cheerio, monitor, logs, plugin) {
    var $ = cheerio.load(body, {
        decodeEntities: false
    });
    return true;
}