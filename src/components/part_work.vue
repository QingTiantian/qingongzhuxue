<template>
<div class="container">
  <img src="../assets/back2-1.png" class="bacImage"/>

  <div class="title" >
    <div style="color: white;margin:2px 20px 0;font-size: 40px;display: flex;flex-direction: column;">
      <div style="width: 100%;height: 10%;padding-bottom:50px">勤工助学之星</div>
      <img src="../assets/top_title.png" style="width:100%;height:90%; margin-top:-110px"/>
    </div>

  </div>

  <div class="parent">
  <div class="box1">
    <div class="item-1 animated bounceIn" >
      <div class="subtitle" ><div style="margin-left:10px ;padding-top:3px">支配奖学金方法</div></div>
      <div  class="main" >
        <div id="1" style="width:100%;height: 87%;padding-left:3%">
        </div>
      </div>
    </div>

    <div  class="item-2 animated bounceIn">
      <div class="subtitle" ><div style="margin-left:10px;padding-top:3px">班级参与度</div></div>
      <div class="main" style="text-align:center;">
        <div id="2"  style="width: 100%;height:90%;padding-top:3%;">

        </div>
      </div>
    </div>
</div>

    <div class="box2">
    <div id="MAIN" class="item-3 animated bounceIn" >
      <div class="subtitle"  style="height:9.5%"><div id="main_title" style="margin-left:10px;padding-top:3px;">关系网络图</div></div>
      <div class="main" id="m1">
        <div  id="3"  style="width: 100%;height: 90%;padding-left:3%">
        </div>
      </div>
    </div>


    <div class="item-4 animated bounceIn" id="div4">
      <div class="subtitle" style="height:16%"><div id="div4_title" style="margin-left:10px;padding-top:3px">单位竞聘通过率</div></div>
      <div class="main">
        <div id="4" style="width: 100%;height: 80%;padding-left: 7%;padding-top:2%;">
        </div>
      </div>
    </div>
    </div>

    <div class="box3">
    <div class="item-5 animated bounceIn">
      <div class="subtitle" ><div style="margin-left:10px;padding-top:3px">超前消费行为</div></div>
      <div class="main" >
        <div id="5" style="width: 99%;height: 90%;padding-top:5%;">

        </div>
      </div>
    </div>

    <div class="item-6 animated bounceIn" >
      <div class="subtitle" ><div style="margin-left:10px;padding-top:3px">兼职与志愿时长</div></div>
      <div class="main">
        <div id="6" style="width: 99%;height: 90%;padding-top:2%;padding-left:1%">

        </div>
      </div>
    </div>
    </div>
  </div>

</div>
</template>



<script>
  import qs from 'qs'
  import 'echarts-liquidfill/src/liquidFill.js';

  let mainChart
  export default {
    name: "part_work",
    components:{ },
    data() {
      return {
          mainChart:null,
          myChart_1:null,
         myChart_2:null,
          myChart_4:null,
        myChart_5:null,
         myChart_6:null
        /*items: [],
        index:1*/
      }
    },
    mounted() {
        this.studyInterval();

        this.myChart_1 = this.$echarts.init(document.getElementById('1'));
        this.myChart_2 = this.$echarts.init(document.getElementById('2'));
        this.mainChart=this.$echarts.init(document.getElementById('3'))
        this.myChart_4 = this.$echarts.init(document.getElementById('4'));
        this.myChart_5 = this.$echarts.init(document.getElementById('5'));
        this.myChart_6 = this.$echarts.init(document.getElementById('6'));
        window.onresize = () => {
            // 基于准备好的dom，初始化echarts实例
            // window.console.log("option1",chart1.data().option1);
            // window.console.log("option1",chart1.methods.getOption())
            this.myChart_1.resize();
            this.myChart_2.resize();
            this.mainChart.resize();
            this.myChart_4.resize();
            this.myChart_5.resize();
            this.myChart_6.resize();
        };
      this.draw_1();
      this.draw_2();
      this.mainShow();
      this.draw_3Option();
      this.draw_4(4);
      this.draw_5();
      this.draw_6();

    },
    methods: {
        //定时器
        studyInterval(){
            let maintime=0;
            let main=document.getElementById('MAIN'),main_title=document.getElementById('main_title');
            let d_3=document.getElementById('3');
            let div4=document.getElementById('div4'),div4_title=document.getElementById('div4_title');
            let option='',mainOption=this.draw_3Option();
            console.log(main_title);
            //div4.classList.remove('bounceIn');
            //第一个div隐藏
            let temp=setInterval(()=>{
              main.classList.add('bounceOut');
              //console.log('????');
              clearInterval(temp);
            },5000);
            //显示下一个div
            let mainInter=setInterval(()=>{
                main.classList.remove('bounceOut');
                main.classList.add("bounceIn");

                maintime=(maintime+1)%6;
                console.log(maintime)
                switch (maintime) {
                    case 0://主屏
                        option=this.draw_3Option();
                        main_title.innerText='关系网络图';//.text('关系网络图');
                        break;
                    case 1://第一个屏幕
                        option=this.draw_1Option();

                        main_title.innerText='支配奖学金方法';
                        break;
                    case 3://第二个屏幕
                        option=this.draw_2Option();

                        document.getElementById("3").style.right="6%";
                        main_title.innerText='班级参与度';

                        break;
                    case 4:
                        console.log(div4);
                        document.getElementById("3").style.right="0%";
                        this.draw_4Main();
                        main_title.innerText='单位竞聘通过率';
                       // div4_title.innerText='网络关系图';

                        break;
                    case 2:
                        option=this.draw_5Option();
                        console.log('555')
                        main_title.innerText='超前消费行为';
                        break;
                    case 5:
                        option=this.draw_6Option();
                        main_title.innerText='兼职与志愿时长';
                        break;
                    default: break;
                }
                if (maintime!=4){
                    this.mainChart.setOption(option,true);
                    div4_title.innerText='单位竞聘通过率';
                    this.draw_4(4)
                }
                else {
                    this.myChart_4.setOption(mainOption ,true);
                     this.draw_4(4)
                }
            },5300);
            let hide=setInterval(()=>{
                main.classList.add('bounceOut');//div4.classList.remove('bounceIn');
                //clearInterval(temp);
            },5000);
        },

        draw_1() {
        //this.myChart_1 = this.$echarts.init(document.getElementById('1'))
        let option=this.draw_1Option();
        this.myChart_1.setOption(option);
      },
        draw_1Option(){
            let data = [
                {
                    name: "购买自己喜欢的东西",
                    value: 67.27
                },
                {
                    name: "增加日常消费",
                    value: 36.36
                },
                {
                    name: "旅游度假",
                    value: 27.27
                },
                {
                    name: "投资理财",
                    value: 23.64
                },
                {
                    name: "其他",
                    value: 14.55
                },
                {
                    name: "交由父母支配",
                    value: 13.64
                },
                {
                    name: "校外辅导班/兴趣班",
                    value: 10.91
                }
            ];
            let arrName = getArrayValue(data, "name");
            let arrValue = getArrayValue(data, "value");
//sumValue = eval(arrValue.join('+'));
            let sumValue=100;
            let objData = array2obj(data, "name");
            let optionData = getData(data)
            function getArrayValue(array, key) {
                var key = key || "value";
                var res = [];
                if (array) {
                    array.forEach(function(t) {
                        res.push(t[key]);
                    });
                }
                return res;
            }

            function array2obj(array,key) {
                var resObj = {};
                for(var i=0;i<array.length;i++){
                    resObj[array[i][key]] = array[i];
                }
                return resObj;
            }

            function getData(data) {
                var res = {
                    series: [],
                    yAxis: []
                };
                for (let i = 0; i < data.length; i++) {
                    // console.log([70 - i * 15 + '%', 67 - i * 15 + '%']);
                    res.series.push({
                        name: '',
                        type: 'pie',
                        clockWise: false, //顺时加载
                        hoverAnimation: false, //鼠标移入变大
                        //radius: [73 - i * 15 + '%', 68 - i * 15 + '%'],
                        radius: [75 - i * 10 + '%', 68 - i * 10 + '%'],
                        center: ["30%", "55%"],
                        label: {
                            show: false
                        },
                        itemStyle: {
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false
                            },
                            borderWidth: 5,
                        },
                        data: [{
                            value: data[i].value,
                            name: data[i].name
                        }, {
                            value: sumValue - data[i].value,
                            name: '',
                            itemStyle: {
                                color: "rgba(0,0,0,0)",
                                borderWidth: 0
                            },
                            tooltip: {
                                show: false
                            },
                            hoverAnimation: false
                        }]
                    });
                    res.series.push({
                        name: '',
                        type: 'pie',
                        silent: true,
                        z: 1,
                        clockWise: false, //顺时加载
                        hoverAnimation: false, //鼠标移入变大
                        radius: [75- i * 10 + '%', 68 - i * 10 + '%'],
                        center: ["30%", "55%"],
                        label: {
                            show: false
                        },
                        itemStyle: {
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false
                            },
                            borderWidth: 5,
                        },
                        data: [{
                            value: 7.5,
                            itemStyle: {
                                color: "rgb(3, 31, 62)",
                                borderWidth: 0
                            },
                            tooltip: {
                                show: false
                            },
                            hoverAnimation: false
                        }, {
                            value: 2.5,
                            name: '',
                            itemStyle: {
                                color: "rgba(0,0,0,0)",
                                borderWidth: 0
                            },
                            tooltip: {
                                show: false
                            },
                            hoverAnimation: false
                        }]
                    });
                    res.yAxis.push((data[i].value / sumValue * 100).toFixed(2) + "%");
                }
                return res;
            }

            let option = {
                //backgroundColor:'#000',
                legend: {
                    show: true,
                    icon:"circle",
                    top: "center",
                    left: '57%',
                    data: arrName,
                    width:50,
                    padding: [0, 5],
                    itemGap: 10,
                    formatter: function(name) {
                        return "{title|" + name + "}"
                    },

                    textStyle: {
                        rich: {
                            title: {
                                fontSize: 10,
                                lineHeight: 15,
                                color: "rgb(0, 178, 246)",

                            },
                            value: {
                                fontSize: 18,
                                lineHeight: 20,
                                color: "#fff"
                            }
                        }
                    },
                },
                tooltip: {
                    show: true,
                    trigger: "item",
                    formatter: "{a}<br>{b}:{c}({d}%)"
                },
                color: [  '#126FCA','rgb(66,192,172)', '#8AD3F5','#C58DE4','#95EED7','#F3C76E','#EA823E',],
                grid: {
                    top: '15%',
                    bottom: '44%',
                    left: "30%",
                    containLabel: false
                },
                yAxis: [{
                    type: 'category',
                    inverse: true,
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        interval: 0,
                        inside: true,
                        textStyle: {
                            color: "#fff",
                            fontSize: 10,
                        },
                        show: true
                    },
                    data: optionData.yAxis
                }],
                xAxis: [{
                    show: false
                }],
                series: optionData.series
            };
            return option;
        },

        draw_2() {
        let option=this.draw_2Option();
        this.myChart_2 = this.$echarts.init(document.getElementById('2'));
        // 绘制图表
          this.myChart_2.setOption(option);
      },
        draw_2Option(){
            let sddata2 = [
                {name: '治安1601', val: 1},
                {name: '法1710', val: 2},
                {name: '国商1601', val: 3},
                {name: '财政1702', val: 4},
                {name: '社会1601', val: 5},
                {name: '广电1601', val: 6}/*,
         {name:'司法1601',val:7}*/
            ]
            let option = {
                xAxis: [
                    /*				    {
                                           type: 'value',
                                           show:false,//网格线
                                           min:80
                                       },*/
                    {
                        type: 'value',
                        //gridIndex: 1,
                        min: 0,
                        show: false,//网格线
                    },/*{
				        type: 'value',
				        show:false,//网格线
				        min:80,
				        gridIndex: 1
				    },*/
                ],
                yAxis: [
                    {
                        axisTick: {show: false},//去掉间隔线
                        axisLine: {show: false,},//去掉轴线
                        data: ['广电1601', '社会1601', '财政1702', '国商1601', '   法1710', '治安1601'],
                        axisLabel: {
                            formatter: function (value, index) {
                                let val = '';
                                if (sddata2[index].val == 1) {
                                    val = '{a| }{value|' + ' ' + value + '}';
                                } else if (sddata2[index].val == 2) {
                                    val = '{b| }{value|' + ' ' + value + '}';
                                } else if (sddata2[index].val == 3) {
                                    val = '{c| }{value|' + ' ' + value + '}';
                                } else if (sddata2[index].val == 4) {
                                    val = '{d| }{value|' + ' ' + value + '}';
                                } else if (sddata2[index].val == 5) {
                                    val = '{e| }{value|' + ' ' + value + '}';
                                } else if (sddata2[index].val == 6) {
                                    val = '{f| }{value|' + ' ' + value + '}';
                                }/*else if(sddata2[index].val==7){
                   val='{g| }{value|' +' '+ value + '}';
                 }*/
                                return val
                            },
                            margin: 20,
                            color: 'white',
                            rich: {
                                a: {
                                    height: 20,
                                    align: 'center',
                                    /*backgroundColor: {
                                               image: img0
                                           }*/
                                },
                                b: {
                                    height: 20,
                                    align: 'center',
                                    /*backgroundColor: {
                                               image:img1
                                           }*/
                                },
                                c: {
                                    height: 20,
                                    align: 'center',
                                    /*backgroundColor: {
                                               image:img2
                                           }*/
                                },
                                d: {
                                    height: 20,
                                    align: 'center',
                                    /* backgroundColor: {
                                                image:img2
                                            }*/
                                },
                                e: {
                                    height: 20,
                                    align: 'center',
                                    /*backgroundColor: {
                                               image:img2
                                           }*/
                                },
                                f: {
                                    height: 20,
                                    align: 'center',
                                    /*backgroundColor: {
                                               image:img2
                                           }*/
                                },
                                /*g: {
                                 height: 20,
                                 align: 'center',
                                 /!*backgroundColor: {
                                             image:img2
                                         }*!/
                               },*/
                            }
                        },
                        //gridIndex: 1
                    }
                ],
                grid: [
                    /*{
                               top:'6%',
                               right:'70%',
                               bottom: '10%',
                               left:'12%'
                           },*/
                    {
                        top: '8%',
                        right: '15%',
                        bottom: '10%',
                        left: '40%',
                    }/*, {
				    	top:'6%',
				    	right:'2%',
				    	bottom: '10%',
				    	left:'72%',
				    }*/
                ],
                series: [
                    {
                        type: 'bar',
                        data: [42.86, 44.45, 46.51, 50, 56, 57.14],
                        itemStyle: {
                            normal: {
                              color:function(params)
                              {
                                var myColor=['#126FCA',  '#FBBBE7', '#8AD3F5','#C58DE4','#95EED7','#F3C76E'];
                                var num=myColor.length;
                                return myColor[params.dataIndex%num]
                              },
                            }
                        },
                        barWidth: '17',
                        label: {
                            normal: {
                                show: true,
                                color: 'black',
                                position: ['5', '20%'],
                                formatter: '{c}%'
                            }
                        },
                        /*xAxisIndex: 1,
                               yAxisIndex: 1*/
                    },
                    {
                        name: '',
                        show: false,
                        align: 'left',
                        type: 'bar',
                        yAxisIndex: 0,
                        itemStyle: {
                            normal: {
                                color: '#3297DB'
                            }
                        },
                        barWidth: '0',
                        label: {
                            normal: {
                                position: 'right',
                                //color:'#DBAAED',
                            }
                        },
                        /*data: [92,92,92,92,92],*/
                        data: [42.86, 44.45, 46.51, 50, 56, 57.14],
                        markLine: {
                            symbol: 'none',//去掉箭头
                            data: [
                                {type: 'average', name: '平均值'}
                            ],
                            label: {
                                position: 'end',
                                formatter: '{c}%'
                            },
                            lineStyle: {
                                color: '#A2E0FC'
                            }
                        },
                        /*xAxisIndex: 1,
                         yAxisIndex: 1*/
                    },
                    {
                        name: '',
                        show: true,
                        align: 'left',
                        type: 'bar',
                        yAxisIndex: 0,
                        itemStyle: {
                            normal: {
                                color: '#3297DB'
                            }
                        },
                        barWidth: '0',
                        label: {
                            normal: {
                                position: 'right',
                            }
                        },
                        data: [57.14, 57.14, 57.14, 57.14, 57.14],
                        markLine: {
                            padding: [0, -70],
                            symbol: 'none',//去掉箭头
                            data: [
                                {type: 'average', name: '最大值'}
                            ],
                            label: {
                                position: 'start',
                                formatter: '{c}%'
                            },
                            lineStyle: {
                                color: '#4FEE27'
                            }
                        },
                        /* xAxisIndex: 1,
                          yAxisIndex: 1*/
                    },

                ]
            };
            return option;
        },

        mainShow(){
            //mainChart=this.$echarts.init(document.getElementById('3'))
            let mainOption=this.draw_3Option();
            this.mainChart.setOption(mainOption);
        },
        draw_3Option(){
            var nodes = [
                {
                    name: '勤工助学',
                    relation: '0'
                },
                {
                    name: '岗位',
                    relation: '1'
                },
                {
                    name: '图书馆',//238
                    relation: '2'
                },{
                    name: '信管部',//212
                    relation: '2'
                },
                {
                    name: '人武部',//131
                    relation: '2'
                },
                {
                    name: '学工部',//131
                    relation: '2'
                },
                {
                    name: '后勤',//124
                    relation: '2'
                },
                {
                    name: '消费地点(次数)',
                    relation: '1'
                },
                {
                    name: '开水器',//223277
                    relation: '2'
                },
                {
                    name: '八食堂',//135643
                    relation: '2'
                },
                {
                    name: '四食堂',//93487
                    relation: '2'
                },{
                    name: '二食堂',//81300
                    relation: '2'
                },{
                    name: '甜品粥铺',//18525
                    relation: '2'
                },{
                    name: '游泳场',//658
                    relation: '2'
                },
                {
                    name: '自习地点(次数)',
                    relation: '1'
                },
                {
                    name: '自主学习空间',//33099
                    relation: '2'
                },
                {
                    name: '社经文献阅览室',//27007
                    relation: '2'
                },
                {
                    name: '综合阅览室(一)',//22203
                    relation: '2'
                },
            ]
            var links = [
                {
                    source: '勤工助学',
                    target: '岗位',
                    name: '参与',
                    relation: '1'

                }, {
                    source: '勤工助学',
                    target: '消费地点(次数)',
                    name: '消费',
                    relation: '1'
                },
                {
                    source: '勤工助学',
                    target: '自习地点(次数)',
                    name: '学习',
                    relation: '1'
                },
                {
                    source: '岗位',
                    target: '图书馆',
                    name: '238名',
                    relation: '2'
                },
                {
                    source: '岗位',
                    target: '信管部',
                    name: '212名',
                    relation: '2'
                },
                {
                    source: '岗位',
                    target: '学工部',
                    name: '131名',
                    relation: '2'
                },
                {
                    source: '岗位',
                    target: '人武部',
                    name: '131名',
                    relation: '2'
                },
                {
                    source: '岗位',
                    target: '后勤',
                    name: '124名',
                    relation: '2'
                },
                {
                    source: '消费地点(次数)',
                    target: '开水器',
                    name: '',
                    relation: '2'
                },
                {
                    source: '消费地点(次数)',
                    target: '八食堂',
                    name: '',
                    relation: '2'
                },
                {
                    source: '消费地点(次数)',
                    target: '四食堂',
                    name: '',
                    relation: '2'
                },
                {
                    source: '消费地点(次数)',
                    target: '二食堂',
                    name: '',
                    relation: '2'
                },
                {
                    source: '消费地点(次数)',
                    target: '甜品粥铺',
                    name: '',
                    relation: '2'
                },
                {
                    source: '消费地点(次数)',
                    target: '游泳场',
                    name: '',
                    relation: '2'
                },
                {
                    source: '自习地点(次数)',
                    target: '自主学习空间',
                    name: '',
                    relation: '2'
                },
                {
                    source: '自习地点(次数)',
                    target: '社经文献阅览室',
                    name: '',
                    relation: '2'
                },
                {
                    source: '自习地点(次数)',
                    target: '综合阅览室(一)',
                    name: '',
                    relation: '2'
                },
            ]
            var charts = {
                nodes: [],
                links: []
            }
            //'rgb(24, 183, 142)', 'rgb(1, 179, 238)', 'rgb(22, 75, 205)'
            for (var j = 0; j < nodes.length; j++) {
                if (nodes[j].relation == '1') {
                    var node = {
                        name: nodes[j].name,
                        alarm: nodes[j].alarm,
                        itemStyle: {
                            normal: {
                                color: '#FCA5F1',
                            }
                        }
                    }
                } else if (nodes[j].relation == '2') {
                    node = {
                        name: nodes[j].name,
                        alarm: nodes[j].alarm,
                        itemStyle: {
                            normal: {
                                color: '#83B2FF',
                            }
                        }
                    }
                } else {
                    node = {
                        name: nodes[j].name,
                        alarm: nodes[j].alarm,
                        itemStyle: {
                            normal: {
                                color: '#4458FA',
                            }
                        }
                    }
                }
                charts.nodes.push(node)
            }
            for (var i = 0; i < links.length; i++) {
                if (links[i].relation == "1") {
                    var link = {
                        source: links[i].source,
                        target: links[i].target,
                        label: {
                            normal: {
                                show: true,
                                formatter: links[i].name
                            }
                        },
                        lineStyle: {
                            normal: {
                                color: 'rgb(24, 183, 142)'//线和字的颜色
                            }
                        }
                    }
                } else {
                    var link = {
                        source: links[i].source,
                        target: links[i].target,
                        label: {
                            normal: {
                                show: true,
                                formatter: links[i].name
                            }
                        },
                        lineStyle: {
                            normal: {
                                color: 'rgb(24, 183, 142)'
                            }
                        }
                    }
                }
                charts.links.push(link)
            }
            let option = {
                grid:{
                  top:'center',
                    bottom:'0.5%'
                },
                series: [
                    {
                        type: 'graph',
                        layout: 'force',
                        symbolSize: 25,//圆圈大小
                        edgeSymbol: ['circle', 'arrow'],
                        force: {
                            repulsion: 300,//球球之间的互斥因子
                            edgeLength: [1, 2],
                            layoutAnimation: true
                        },
                        draggable: true,
                        edgeLabel: {//边上标签
                            normal: {
                                show: true,
                                formatter: function(x) {
                                    return x.data.name;
                                }
                            }
                        },
                        label: {
                            normal: {
                                show: true,
                                position: 'bottom',
                                color: '#17FFF3'
                            }
                        },
                        lineStyle: {
                            normal: {
                                width: 2,//线的宽度
                                shadowColor: 'none'
                            }
                        },
                        data: charts.nodes,
                        links: charts.links,
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    formatter: function(item) {
                                        return item.data.name
                                    }
                                }
                            }
                        }
                    }]
            };
            return option;
        },

        draw_4(name){
            let myChart_4=this.$echarts.init(document.getElementById(name));
          let img2 =  require('../assets/hong.png');
          let img22=  require('../assets/hong.png');
          let img1 =  require('../assets/lan.png');
          let img11=  require('../assets/lan.png');
          let img4 =  require('../assets/fen.png');
          let img44 =  require('../assets/fen.png');
          let img5 =  require('../assets/cheng.png');
          let img55 =  require('../assets/cheng.png');
          let img3=  require('../assets/lv.png');
          let img33 =  require('../assets/lv.png');

          let option = {
            title: {
              //text: "单位竞聘通过率",
              // subtext: "pictorialBar - 自定义柱状图",
              textStyle: {
                color: "#fff",
                fontSize: 16
              },
              left: '4.5%',
             // top: "25%"

            },
            //backgroundColor: "#2c343c",
            grid: {
              left: "5.2%",
              top: "2%",
              bottom: "1%",
              right: "24.5%",
              containLabel: true
            },
            tooltip: {
              trigger: "item",
            },
            xAxis: {
              splitLine: {
                show: false
              },
              axisLine: {
                show: false
              },
              axisLabel: {
                show: false
              },
              axisTick: {
                show: false
              }

            },
            yAxis: [{
              type: "category",
              inverse: false,
              data: ["校医院", "财务部", "学工部办公室", "团委", "刑事司法学院"],
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              splitLine: {
                show: false,
                lineStyle: {
                  type: "dashed",
                  color: "#3e86dd"
                }
              },
              axisLabel: {
                margin: 10,
                textStyle: {
                  color: "#fff",
                  fontSize: 14,
                }

              }
            }

            ],
            series: [

              {
                tooltip: {
                  show: false
                },
                "itemStyle": {
                  "normal": {
                    "opacity": 0.3
                  }
                },
                z: 4,
                type: "pictorialBar",
                symbolSize: ['28', '28'],
                symbolRepeat: "fixed",
                data: [{
                  value: 100,
                  symbol: 'image://' + img11,
                },
                  {
                    value: 100,
                    symbol: 'image://' + img22,
                  },
                  {
                    value: 100,
                    symbol: 'image://' + img33,
                  },
                  {
                    value: 100,
                    symbol: 'image://' + img44,
                  },
                  {
                    value: 100,
                    symbol: 'image://' + img55,
                  }
                ]

              },
              {
                z: 6,
                type: "pictorialBar",
                symbolSize: ['28', '28'],

                animation: true,
                symbolRepeat: "fixed",
                symbolClip: true,
                symbolPosition: "start",
                symbolOffset: [0, 0],

                data: [{
                  value: 84.62,
                  symbol: 'image://' + img1,
                },
                  {
                    value: 84.62,
                    symbol: 'image://' + img2,
                  },
                  {
                    value: 88.89,
                    symbol: 'image://' + img3,
                  },
                  {
                    value: 90,
                    symbol: 'image://' + img4,
                  },
                  {
                    value: 96.15,
                    symbol: 'image://' + img5,
                  }
                ],
                label: {
                  normal: {
                    show: true,
                    textStyle: {
                      color: '#18fcff',
                      fontSize: 14,

                    },
                    position: "right",
                    offset: [10, 0]

                  }
                },
              },
              {
                type: "bar"
              },

            ]
          }

          myChart_4.setOption(option);
      },
        draw_4Main(){
          let img2 =  require('../assets/hong.png');
          let img22=  require('../assets/hong.png');
          let img1 =  require('../assets/lan.png');
          let img11=  require('../assets/lan.png');
          let img4 =  require('../assets/fen.png');
          let img44 =  require('../assets/fen.png');
          let img5 =  require('../assets/cheng.png');
          let img55 =  require('../assets/cheng.png');
          let img3=  require('../assets/lv.png');
          let img33 =  require('../assets/lv.png');

          let option = {
            title: {
              //text: "单位竞聘通过率",
              // subtext: "pictorialBar - 自定义柱状图",
              textStyle: {
                color: "#fff",
                fontSize: 16
              },
              left: '4.5%',
              // top: "25%"

            },
            //backgroundColor: "#2c343c",
            grid: {
              left: "5.2%",
              top: "2%",
              bottom: "1%",
              right: "24.5%",
              containLabel: true
            },
            tooltip: {
              trigger: "item",
            },
            xAxis: {
              splitLine: {
                show: false
              },
              axisLine: {
                show: false
              },
              axisLabel: {
                show: false
              },
              axisTick: {
                show: false
              }

            },
            yAxis: [{
              type: "category",
              inverse: false,
              data: ["校医院", "财务部", "学工部办公室", "团委", "刑事司法学院"],
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              splitLine: {
                show: false,
                lineStyle: {
                  type: "dashed",
                  color: "#3e86dd"
                }
              },
              axisLabel: {
                margin: 10,
                textStyle: {
                  color: "#fff",
                  fontSize: 14,
                }

              }
            }

            ],
            series: [

              {
                tooltip: {
                  show: false
                },
                "itemStyle": {
                  "normal": {
                    "opacity": 0.3
                  }
                },
                z: 4,
                type: "pictorialBar",
                symbolSize: ['28', '28'],
                symbolRepeat: "fixed",
                data: [{
                  value: 100,
                  symbol: 'image://' + img11,
                },
                  {
                    value: 100,
                    symbol: 'image://' + img22,
                  },
                  {
                    value: 100,
                    symbol: 'image://' + img33,
                  },
                  {
                    value: 100,
                    symbol: 'image://' + img44,
                  },
                  {
                    value: 100,
                    symbol: 'image://' + img55,
                  }
                ]

              },
              {
                z: 6,
                type: "pictorialBar",
                symbolSize: ['28', '28'],

                animation: true,
                symbolRepeat: "fixed",
                symbolClip: true,
                symbolPosition: "start",
                symbolOffset: [0, 0],

                data: [{
                  value: 84.62,
                  symbol: 'image://' + img1,
                },
                  {
                    value: 84.62,
                    symbol: 'image://' + img2,
                  },
                  {
                    value: 88.89,
                    symbol: 'image://' + img3,
                  },
                  {
                    value: 90,
                    symbol: 'image://' + img4,
                  },
                  {
                    value: 96.15,
                    symbol: 'image://' + img5,
                  }
                ],
                label: {
                  normal: {
                    show: true,
                    textStyle: {
                      color: '#18fcff',
                      fontSize: 14,

                    },
                    position: "right",
                    offset: [10, 0]

                  }
                },
              },
              {
                type: "bar"
              },

            ]
          }
            this.mainChart.setOption(option,true);
        },

        draw_5() {
        // 绘制图表
          console.log(this.myChart_5);
          let option=this.draw_5Option();
        this.myChart_5.setOption(option);
      },
        draw_5Option(){
          let option={
              series: [{
                  type: 'liquidFill',
                  data: [0.5364, 0.5, 0.4, 0.3],
                  radius: '80%',
                  backgroundStyle: {
                      borderWidth: 5,
                      borderColor: '#67FFCF',
                      color: '#232c35'
                  },
              }]
          };
          return option;
      },

        draw_6() {
        let option=this.draw_6Option();
        // 绘制图表
          this.myChart_6.setOption(option);
      },
        draw_6Option(){
            let dataIPSxAxis = ['0', '25', '50', '75 ', '100 ', '100以上'];
            let dataIPS = [0,77, 27, 16, 15, 37];
            let dataIPS2 = [0, 216, 60, 31, 21, 42];
            let dataIPS3 = [0, 268, 94, 41, 29, 76];
            let option = {
                title : {
                    //text: '是否兼职与志愿时长的关系',
                    //text: '兼职人数',
                    textStyle:{
                        color:"#fff",

                    }
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985',
                        },
                    }
                },
                color: ["#0080ff", "#4cd5ce"],
                toolbox: {
                    // feature: {
                    //     saveAsImage: {}
                    // }
                },
                grid: {
                    left: '5%',
                    right: '5%',
                    top:'10%',
                    bottom: '17%',
                    containLabel: true
                },
              legend:{
                //orient: 'vertical',  //垂直显示
                y: 'bottom',    //延Y轴居中
                x: 'right', //居右显示
                align: 'left',
                padding:20, //调节legend的位置
                textStyle: {
                  color: 'white',
                  // fontSize: 20,
                  // padding:5
                },
                data: ['校内兼职','校外兼职','未兼职'],
              },
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    data: dataIPSxAxis,
                    name:'志愿工时',
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#6ba1bb',
                            fontSize: 12,
                        },
                        formatter: function(value) {
                            //debugger
                            var ret = ""; //拼接加\n返回的类目项
                            var maxLength = 5; //每项显示文字个数
                            var valLength = value.length; //X轴类目项的文字个数
                            var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                            if (rowN > 1) //如果类目项的文字大于3,
                            {
                                for (var i = 0; i < rowN; i++) {
                                    var temp = ""; //每次截取的字符串
                                    var start = i * maxLength; //开始截取的位置
                                    var end = start + maxLength; //结束截取的位置
                                    //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                                    temp = value.substring(start, end) + "\n";
                                    ret += temp; //凭借最终的字符串
                                }
                                return ret;
                            } else {
                                return value;
                            }
                        },
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#0a2b52',
                            width: 0.5, //这里是为了突出显示加上的
                        }
                    }
                }],
                yAxis: [{
                    type: 'value',
                    //name:'志愿人数',
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: '#0a2b52',
                            width: 1, //这里是为了突出显示加上的
                        }
                    },

                    axisLabel: {
                        formatter: function(val) {
                            return val + '';
                        },
                        show: true,
                        textStyle: {
                            color: '#6ba1bb' //字体颜色
                        }
                    },
                    splitLine:{
                        show:true,
                        lineStyle:{
                            type:'dashed'

                        }

                    },
                }],
                series: [
                    {
                        name: '校内兼职',
                        type: 'line',
                        smooth: true,
                        //  symbol: "none", //去掉折线点
                        stack: 100,
                        itemStyle: {
                            normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#CB8993' // 0% 处的颜色
                                }, {
                                    offset: 0.5,
                                    color: '#CB8993' // 100% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#CC56CB' // 100% 处的颜色
                                }]), //背景渐变色
                                lineStyle: { // 系列级个性化折线样式
                                    width: 0.5,
                                    type: 'solid',
                                    color: "#CC56CB"
                                }
                            },
                            emphasis: {
                                color: '#02675f',
                                lineStyle: { // 系列级个性化折线样式
                                    width: 0.5,
                                    type: 'dotted',
                                    color: "#02675f" //折线的颜色
                                }
                            }
                        }, //线条样式
                        symbolSize: 5, //折线点的大小
                        areaStyle: {
                            normal: {}
                        },
                        data: dataIPS,
                    },

                    {
                        name: '校外兼职',
                        type: 'line',
                        smooth: true,
                        //  symbol: "none", //去掉折线点
                        stack: 100,
                        itemStyle: {
                            normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#64CAFA' // 0% 处的颜色
                                }, {
                                    offset: 0.5,
                                    color: '#64CAFA' // 100% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#0078D7' // 100% 处的颜色
                                }]), //背景渐变色
                                lineStyle: { // 系列级个性化折线样式
                                    width: 0.5,
                                    type: 'solid',
                                    color: "#0078D7"
                                }
                            },
                            emphasis: {
                                color: '#02675f',
                                lineStyle: { // 系列级个性化折线样式
                                    width: 0.5,
                                    type: 'dotted',
                                    color: "#02675f" //折线的颜色
                                }
                            }
                        }, //线条样式
                        symbolSize: 5, //折线点的大小
                        areaStyle: {
                            normal: {}
                        },
                        data: dataIPS2,
                    },

                    {
                        name: '未兼职',
                        type: 'line',
                        smooth: true,
                        //  symbol: "none", //去掉折线点
                        stack: 100,
                        itemStyle: {
                            normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#003399' // 0% 处的颜色
                                }, {
                                    offset: 0.5,
                                    color: '#003399' // 100% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#000099' // 100% 处的颜色
                                }]), //背景渐变色
                                lineStyle: { // 系列级个性化折线样式
                                    width: 0.5,
                                    type: 'solid',
                                    color: "#0078D7"
                                }
                            },
                            emphasis: {
                                color: '#02675f',
                                lineStyle: { // 系列级个性化折线样式
                                    width: 0.5,
                                    type: 'dotted',
                                    color: "#02675f" //折线的颜色
                                }
                            }
                        }, //线条样式
                        symbolSize: 5, //折线点的大小
                        areaStyle: {
                            normal: {}
                        },
                        data: dataIPS3,
                    },
                ]
            };
            return option;
        }
    }
  }
</script>


<style scoped>
  .container
  {
    width: 100%;
    height:100vh;
    font-family: ch;
    font-color:white;
  }
  .title{
    width: 100%;
    height: 11%;

  }
  .bacImage{
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
  .subtitle{
    width: 100%;
    height: 12%;
    //overflow:hidden;
    color: white;
    text-align: left;
    /*background-color:rgba(51,153,255,0.3);*/
    background-image: linear-gradient(rgba(39,64,205,0.5), rgba(135,206,255,0.2));
    font-size:16px;
    font-weight:bold;
  }
  section{
    z-index: 1;
  }

  .item-1
  {
    font-size: 16px;
    text-align: center;
    height: 50%;
    width: 100%;
    background-color: rgba(102,102,102,0.1);
    border-radius: 15px;
    box-shadow: 0px 20px 40px rgba(0,0,0,.5),0px -2px 40px rgba(0,0,0,.3);
    position:relative;
    transition:all 0.8s;
    margin-bottom:10px;
    overflow:hidden;
  }

  .item-2
  {
    font-size:16px;
    text-align: center;
    height: 50%;
    width:  100%;
    background-color: rgba(102,102,102,0.1);
    border-radius: 15px;
    box-shadow: 0px 20px 40px rgba(0,0,0,.5),0px -2px 40px rgba(0,0,0,.3);
    position:relative;
    transition:all 0.8s;
    margin-bottom:10px;
    overflow:hidden;
  }
  .item-3
  {
    font-size: 16px;
    text-align: center;
    height:62%;
    width:  100%;
    background-color: rgba(102,102,102,0.1);
    border-radius: 15px;
    box-shadow: 0px 20px 40px rgba(0,0,0,.5),0px -2px 40px rgba(0,0,0,.3);
    position:relative;
    transition:all 0.8s;
    margin-bottom:10px;
    overflow:hidden;
  }
  .item-4
  {
    font-size:16px;
    text-align: center;
    height:35%;
    width: 100%;
    background-color: rgba(102,102,102,0.1);
    border-radius: 15px;
    box-shadow: 0px 20px 40px rgba(0,0,0,.5),0px -2px 40px rgba(0,0,0,.3);
    position:relative;
    transition:all 0.8s;
    margin-bottom:10px;
    overflow:hidden;
  }
  .item-5
  {
    font-size: 16px;
    text-align: center;
    height: 50%;
    width:  100%;
    background-color: rgba(102,102,102,0.1);
    border-radius: 15px;
    box-shadow: 0px 20px 40px rgba(0,0,0,.5),0px -2px 40px rgba(0,0,0,.3);
    position:relative;
    transition:all 0.8s;
    margin-bottom:10px;
    overflow:hidden;
  }
  .item-6
  {
    font-size:16px;
    text-align: center;
    height: 50%;
    width: 100%;
    background-color: rgba(102,102,102,0.1);
    border-radius: 15px;
    box-shadow: 0px 20px 40px rgba(0,0,0,.5),0px -2px 40px rgba(0,0,0,.3);
    position:relative;
    transition:all 0.8s;
    margin-bottom:10px;
    overflow:hidden;
  }

  .parent{
    padding-top:10px;
    position:relative;
    overflow: hidden;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 90%;
    text-align: center;
    width: 100%;
    box-sizing: content-box;
  }

  .main{
    height: 99%;
    width: 100%;
  }

  .box1
  {
    width:25%;
    display:flex;
    flex-direction: column;
    padding-left:15px;
    margin-bottom:40px;
    text-align:center;
    padding-right:10px;

  }
  .box2
  {
    width:50%;
    display:flex;
    flex-direction: column;
    margin-bottom:40px;
    text-align:center;

  }
  .box3
  {
    width:25%;
    display:flex;
    flex-direction: column;
    margin-bottom:40px;
    text-align:center;
    padding-right:15px;
    padding-left:10px;

  }

</style>
