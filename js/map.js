$(document).ready(function () {
    var map = new AMap.Map('map-container', {
        zoom: 11,//级别
        center: [116.351120, 39.216690],//中心点坐标
        viewMode: '3D'//使用3D视图
    });
    var marker = new AMap.Marker({
        position: [116.351120, 39.216690]
   })
   map.add(marker);
})