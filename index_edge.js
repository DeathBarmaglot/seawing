/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'sewing-girl',
                type: 'image',
                rect: ['160px', '16px','140px','140px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sewing-girl.jpg",'0px','0px']
            },
            {
                id: 'req',
                type: 'image',
                rect: ['-8px', '63px','180px','97px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"req.png",'0px','0px'],
                transform: [[],[],[],['0.75','0.75']]
            },
            {
                id: 'res',
                type: 'image',
                rect: ['-8px', '40px','180px','21px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"res.png",'0px','0px'],
                transform: [[],[],[],['0.9','0.9']]
            },
            {
                id: 'foot',
                type: 'image',
                rect: ['53px', '159px','200px','49px','auto', 'auto'],
                clip: ['rect(0px 200px 25px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"foot.png",'0px','0px']
            },
            {
                id: 'h11',
                type: 'image',
                rect: ['-1px', '3px','300px','20px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"h11.png",'0px','0px'],
                transform: [[],[],[],['0.9','0.9']]
            },
            {
                id: 'l2',
                type: 'image',
                rect: ['-9px', '70px','180px','35px','auto', 'auto'],
                clip: ['rect(0px 180px 35px 16.32486915588379px)'],
                fill: ["rgba(0,0,0,0)",im+"l2.png",'0px','0px'],
                transform: [[],[],[],['0.6','0.6']]
            },
            {
                id: 'l12',
                type: 'image',
                rect: ['-9px', '21px','180px','139px','auto', 'auto'],
                clip: ['rect(0px 180px 139px -2.74169921875px)'],
                fill: ["rgba(0,0,0,0)",im+"l1.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 't',
                type: 'image',
                rect: ['26px', '157px','20px','20px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_foot}": [
                ["style", "top", '159px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0'],
                ["style", "clip", [0,200,25,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '362px']
            ],
            "${_l2}": [
                ["style", "top", '70px'],
                ["transform", "scaleY", '0.6'],
                ["transform", "scaleX", '0.6'],
                ["style", "opacity", '0'],
                ["style", "left", '-9px'],
                ["style", "clip", [0,180,35,16.32486915588379], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_res}": [
                ["style", "top", '40px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '-178px']
            ],
            "${_sewing-girl}": [
                ["style", "top", '16px'],
                ["style", "height", '140px'],
                ["style", "opacity", '0'],
                ["style", "left", '160px'],
                ["style", "width", '140px']
            ],
            "${_l12}": [
                ["style", "top", '21px'],
                ["transform", "scaleY", '0.8'],
                ["transform", "scaleX", '0.8'],
                ["style", "opacity", '0'],
                ["style", "left", '-9px'],
                ["style", "clip", [0,180,-14.75,-2.74169921875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '300px'],
                ["style", "height", '180px'],
                ["style", "overflow", 'hidden']
            ],
            "${_t}": [
                ["style", "top", '157px'],
                ["style", "opacity", '0'],
                ["style", "left", '335px']
            ],
            "${_req}": [
                ["style", "top", '63px'],
                ["transform", "scaleY", '0.75'],
                ["transform", "scaleX", '0.75'],
                ["style", "opacity", '0'],
                ["style", "left", '-8px'],
                ["style", "clip", [0,180,-15,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_h11}": [
                ["style", "top", '3px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '-334px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 11000,
            autoPlay: true,
            timeline: [
                { id: "eid10", tween: [ "style", "${_l12}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 600, easing: "easeInOutCubic" },
                { id: "eid23", tween: [ "style", "${_l12}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 302, easing: "easeInOutCubic" },
                { id: "eid37", tween: [ "style", "${_l12}", "opacity", '0', { fromValue: '0'}], position: 11000, duration: 0, easing: "easeInOutCubic" },
                { id: "eid19", tween: [ "style", "${_t}", "left", '26px', { fromValue: '335px'}], position: 500, duration: 435, easing: "easeInOutCubic" },
                { id: "eid9", tween: [ "style", "${_l2}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 600, easing: "easeInOutCubic" },
                { id: "eid24", tween: [ "style", "${_l2}", "opacity", '0', { fromValue: '1'}], position: 5960, duration: 302, easing: "easeInOutCubic" },
                { id: "eid33", tween: [ "style", "${_l2}", "opacity", '0', { fromValue: '0'}], position: 11000, duration: 0, easing: "easeInOutCubic" },
                { id: "eid30", tween: [ "style", "${_res}", "left", '-8px', { fromValue: '-178px'}], position: 6052, duration: 448, easing: "easeInOutCubic" },
                { id: "eid7", tween: [ "style", "${_res}", "opacity", '1', { fromValue: '0'}], position: 6095, duration: 600, easing: "easeInOutCubic" },
                { id: "eid39", tween: [ "style", "${_res}", "opacity", '0', { fromValue: '1'}], position: 10500, duration: 500, easing: "easeInOutCubic" },
                { id: "eid28", tween: [ "style", "${_sewing-girl}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 302, easing: "easeInOutCubic" },
                { id: "eid44", tween: [ "style", "${_sewing-girl}", "opacity", '0', { fromValue: '1'}], position: 10500, duration: 500, easing: "easeInOutCubic" },
                { id: "eid25", tween: [ "style", "${_foot}", "background-position", [0,-30], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 5750, duration: 302, easing: "easeInOutCubic" },
                { id: "eid3", tween: [ "style", "${_h11}", "left", '-1px', { fromValue: '-334px'}], position: 0, duration: 1000, easing: "easeInOutCubic" },
                { id: "eid20", tween: [ "style", "${_foot}", "left", '53px', { fromValue: '362px'}], position: 500, duration: 435, easing: "easeInOutCubic" },
                { id: "eid11", tween: [ "style", "${_t}", "opacity", '1', { fromValue: '0'}], position: 1580, duration: 302, easing: "easeInOutCubic" },
                { id: "eid41", tween: [ "style", "${_t}", "opacity", '0', { fromValue: '1'}], position: 10500, duration: 500, easing: "easeInOutCubic" },
                { id: "eid6", tween: [ "style", "${_req}", "opacity", '1', { fromValue: '0'}], position: 7145, duration: 600, easing: "easeInOutCubic" },
                { id: "eid42", tween: [ "style", "${_req}", "opacity", '0', { fromValue: '1'}], position: 10500, duration: 500, easing: "easeInOutCubic" },
                { id: "eid5", tween: [ "style", "${_h11}", "opacity", '1', { fromValue: '0'}], position: 400, duration: 600, easing: "easeInOutCubic" },
                { id: "eid43", tween: [ "style", "${_h11}", "opacity", '0', { fromValue: '1'}], position: 10500, duration: 500, easing: "easeInOutCubic" },
                { id: "eid14", tween: [ "style", "${_l12}", "clip", [0,180,139,12.25830078125], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,180,-14.75,-2.74169921875]}], position: 890, duration: 375, easing: "easeInOutCubic" },
                { id: "eid27", tween: [ "style", "${_req}", "clip", [0,180,97,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,180,-15,0]}], position: 7295, duration: 706, easing: "easeInOutCubic" },
                { id: "eid8", tween: [ "style", "${_foot}", "opacity", '1', { fromValue: '0'}], position: 733, duration: 302, easing: "easeInOutCubic" },
                { id: "eid40", tween: [ "style", "${_foot}", "opacity", '0', { fromValue: '1'}], position: 10500, duration: 500, easing: "easeInOutCubic" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-9412320");
