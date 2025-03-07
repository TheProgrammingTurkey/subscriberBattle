async function getSubscribers() {
    const apiKey = "AIzaSyC2R534bu6mG2Ic9vm0eMNk7ym73UQXTgQ"; // Replace with your API key
    const gradeUpGuruChannelId = "UC4tc3mENwycOyU5USqMiJjg";
    const trigsawChannelId = "UCuQV_Ztp6omPz4Q-HYSOtKQ";
    let gradeUpGuruURL = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${gradeUpGuruChannelId}&key=${apiKey}`;
    let trigsawURL = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${trigsawChannelId}&key=${apiKey}`;

    let gradeUpGuruResponse = await fetch(gradeUpGuruURL);
    let gradeUpGuruData = await gradeUpGuruResponse.json();
    let trigsawResponse = await fetch(trigsawURL);
    let trigsawData = await trigsawResponse.json();

    document.getElementById("gradeUpGuruSubCount").innerText = `${gradeUpGuruData.items[0].statistics.subscriberCount} Subscribers`;
    document.getElementById("trigsawSubCount").innerText = `${trigsawData.items[0].statistics.subscriberCount} Subscribers`;

    document.getElementById("gradeUpGuruViewCount").innerText = `${gradeUpGuruData.items[0].statistics.viewCount} Views`;
    document.getElementById("trigsawViewCount").innerText = `${trigsawData.items[0].statistics.viewCount} Views`;

    document.getElementById("gradeUpGuruViewsPerVideo").innerText = `${Math.round(gradeUpGuruData.items[0].statistics.viewCount / gradeUpGuruData.items[0].statistics.videoCount)} Views Per Video`;
    document.getElementById("trigsawViewsPerVideo").innerText = `${Math.round(trigsawData.items[0].statistics.viewCount / trigsawData.items[0].statistics.videoCount)} Views Per Video`;

    gradeUpGuruURL = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${gradeUpGuruChannelId}&key=${apiKey}`;
    trigsawURL = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${trigsawChannelId}&key=${apiKey}`;

    gradeUpGuruResponse = await fetch(gradeUpGuruURL);
    gradeUpGuruData = await gradeUpGuruResponse.json();
    trigsawResponse = await fetch(trigsawURL);
    trigsawData = await trigsawResponse.json();
    console.log(gradeUpGuruData.items[0].snippet.thumbnails.high.url)

    document.getElementById("gradeUpGuruLogo").src = gradeUpGuruData.items[0].snippet.thumbnails.high.url;
    document.getElementById("trigsawLogo").src = trigsawData.items[0].snippet.thumbnails.high.url;
}