<script lang="ts">
import { defineComponent, onMounted, ref, nextTick } from "vue";
import * as echarts from "echarts/core";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
  LegendComponent,
} from "echarts/components";
import { LineChart, BarChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

export default defineComponent({
  setup() {
    const mychart = ref(null);
    const mychart2 = ref(null);
    const mychart3 = ref(null);
    const stackChart = ref(null);
    const mychart6 = ref(null);
    const mychart7 = ref(null);
    const mychart8 = ref(null);

    echarts.use([
      TitleComponent,
      TooltipComponent,
      GridComponent,
      VisualMapComponent,
      LegendComponent,
      LineChart,
      CanvasRenderer,
      UniversalTransition,
      BarChart,
    ]);
    onMounted(() => {
      const myChart = echarts.init(mychart.value);
      const myChart2 = echarts.init(mychart2.value);
      const myChart3 = echarts.init(mychart3.value);
      const myChart6 = echarts.init(mychart6.value);
      const myChart7 = echarts.init(mychart7.value);
      const myChart8 = echarts.init(mychart8.value);
      const stackCharts = echarts.init(stackChart.value);
      // prettier-ignore
      const data = [["2000-06-05", 116], ["2000-06-06", 129], ["2000-06-07", 135], ["2000-06-08", 86], ["2000-06-09", 73], ["2000-06-10", 85], ["2000-06-11", 73], ["2000-06-12", 68], ["2000-06-13", 92], ["2000-06-14", 130], ["2000-06-15", 245], ["2000-06-16", 139], ["2000-06-17", 115], ["2000-06-18", 111], ["2000-06-19", 309], ["2000-06-20", 206], ["2000-06-21", 137], ["2000-06-22", 128], ["2000-06-23", 85], ["2000-06-24", 94], ["2000-06-25", 71], ["2000-06-26", 106], ["2000-06-27", 84], ["2000-06-28", 93], ["2000-06-29", 85], ["2000-06-30", 73], ["2000-07-01", 83], ["2000-07-02", 125], ["2000-07-03", 107], ["2000-07-04", 82], ["2000-07-05", 44], ["2000-07-06", 72], ["2000-07-07", 106], ["2000-07-08", 107], ["2000-07-09", 66], ["2000-07-10", 91], ["2000-07-11", 92], ["2000-07-12", 113], ["2000-07-13", 107], ["2000-07-14", 131], ["2000-07-15", 111], ["2000-07-16", 64], ["2000-07-17", 69], ["2000-07-18", 88], ["2000-07-19", 77], ["2000-07-20", 83], ["2000-07-21", 111], ["2000-07-22", 57], ["2000-07-23", 55], ["2000-07-24", 60]];
      const dateList = data.map(function (item) {
        return item[0];
      });
      const valueList = data.map(function (item) {
        return item[1];
      });
      const option = {
        // Make gradient line here

        title: [
          {
            left: "18px",
            text: "进出口客运量",
            textStyle: {
              fontSize: 30, // Set the font size here
            },
          },
        ],
        tooltip: {
          trigger: "axis",
        },
        xAxis: [
          {
            interval: 1,
            data: dateList,
            axisLabel: {
              show: false, // 上面的图表隐藏x轴标签
            },
          },
          {
            interval: 1,
            data: dateList,
            gridIndex: 1,
          },
        ],
        yAxis: [
          {
            splitLine: {
              show: true,
            },

            min: 0,
            max: 300,
          },
          {
            min: 0,
            max: 300,
            gridIndex: 1,
          },
        ],
        grid: [
          {
            bottom: "53%",
          },
          {
            top: "53%",
          },
        ],
        series: [
          {
            type: "line",
            showSymbol: false,
            data: valueList,
          },
          {
            type: "line",
            showSymbol: false,
            data: valueList,
            xAxisIndex: 1,
            yAxisIndex: 1,
          },
        ],
      };

      const option2 = {
        // Make gradient line here
        visualMap: [
          {
            show: false,
            type: "continuous",
            seriesIndex: 0,
            min: 0,
            max: 400,
          },
          {
            show: false,
            type: "continuous",
            seriesIndex: 1,
            dimension: 0,
            min: 0,
            max: dateList.length - 1,
          },
        ],
        title: [
          {
            left: "18px",
            text: "进口客运量",
            textStyle: {
              fontSize: 30, // Set the font size here
            },
          },
        ],
        tooltip: {
          trigger: "axis",
        },
        xAxis: [
          {
            data: dateList,
            axisLabel: {
              show: false, // 上面的图表隐藏x轴标签
            },
          },
          {
            data: dateList,
            gridIndex: 1,
          },
        ],
        yAxis: [
          {},
          {
            gridIndex: 1,
          },
        ],
        grid: [
          {
            bottom: "53%",
          },
          {
            top: "53%",
          },
        ],
        series: [
          {
            type: "line",
            showSymbol: false,
            data: valueList,
          },
          {
            type: "line",
            showSymbol: false,
            data: valueList,
            xAxisIndex: 1,
            yAxisIndex: 1,
          },
        ],
      };

      const option3 = {
        // Make gradient line here
        visualMap: [
          {
            show: false,
            type: "continuous",
            seriesIndex: 0,
            min: 0,
            max: 400,
          },
          {
            show: false,
            type: "continuous",
            seriesIndex: 1,
            dimension: 0,
            min: 0,
            max: dateList.length - 1,
          },
        ],
        title: [
          {
            left: "18px",
            text: "出口客运量",
            textStyle: {
              fontSize: 30, // Set the font size here
            },
          },
        ],
        tooltip: {
          trigger: "axis",
        },
        xAxis: [
          {
            data: dateList,
            axisLabel: {
              show: false, // 上面的图表隐藏x轴标签
            },
          },
          {
            data: dateList,
            gridIndex: 1,
          },
        ],
        yAxis: [
          {},
          {
            gridIndex: 1,
          },
        ],
        grid: [
          {
            bottom: "53%",
          },
          {
            top: "53%",
          },
        ],
        series: [
          {
            type: "line",
            showSymbol: false,
            data: valueList,
          },
          {
            type: "line",
            showSymbol: false,
            data: valueList,
            xAxisIndex: 1,
            yAxisIndex: 1,
          },
        ],
      };

      const option5 = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow", // 'shadow' as tooltip type
          },
        },
        title: {
          text: "各时段客运量数",
          textStyle: {
            fontSize: 30, // Set the font size here
          },
        },
        // legend: {
        //   data: ["出口", "进口"],
        //   orient: "vertical", // Vertical orientation of the legend items
        //   right: "-5%", // Positioning the legend on the right
        //   top: "middle", // Aligning the legend in the middle vertically
        //   align: "left", // Aligning text to the left of the icons
        // },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: ["01", "02", "03", "04", "05", "06"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "出口",
            type: "bar",
            stack: "total",
            label: {
              show: true,
              position: "insideRight",
            },
            data: [320, 302, 301, 334, 390, 330],
          },
          {
            name: "进口",
            type: "bar",
            stack: "total",
            label: {
              show: true,
              position: "insideRight",
            },
            data: [120, 132, 101, 134, 90, 230],
          },
        ],
      };

      nextTick(() => {
        if (option) {
          myChart.setOption(option);
          myChart2.setOption(option2);
          myChart3.setOption(option3);
          myChart6.setOption({
            ...option,
            title: [{ ...option.title[0], text: "进出口客份额" }],
          });
          myChart7.setOption({
            ...option2,
            title: [{ ...option2.title[0], text: "进口客份额" }],
          });
          myChart8.setOption({
            ...option3,
            title: [{ ...option3.title[0], text: "出口客份额" }],
          });
          stackCharts.setOption(option5);
        }
      });

      window.onresize = () => {
        if (option) {
          myChart.setOption(option);
          myChart2.setOption(option2);
          myChart3.setOption(option3);
          myChart6.setOption(option);
          myChart7.setOption(option2);
          myChart8.setOption(option3);
          stackCharts.setOption(option5);
        }
      };
    });
    return {
      mychart,
      mychart2,
      mychart3,
      stackChart,
      mychart6,
      mychart7,
      mychart8,
    };
  },
});
</script>
<template>
  <div class="contanier">
    <el-row>
      <el-col :span="8">
        <el-row style="flex-direction: column" align="middle">
          <el-col><div ref="mychart" class="charts"></div></el-col>
          <el-col><div ref="mychart2" class="charts"></div></el-col>
          <el-col><div ref="mychart3" class="charts"></div></el-col>
        </el-row>
      </el-col>
      <el-col :span="8">
        <el-row style="flex-direction: column" align="middle">
          <el-col>
            <div>
              <div class="shape-container">
                <div class="triangle left-triangle"></div>
                <div class="rectangle text-3xl">客运量详情</div>
                <div class="triangle right-triangle"></div>
              </div>
            </div>
          </el-col>
          <el-col class="w-full">
            <el-row
              class="w-full bigbox mt-10 py-5 px-1 text-sm"
              align="middle"
            >
              <el-col :span="8">
                <el-row
                  style="flex-direction: column"
                  class="w-full"
                  align="middle"
                  ><el-col>进口:<span>99999</span></el-col>
                  <el-col>同比:<span>8%</span></el-col>
                </el-row>
              </el-col>
              <el-col :span="8">
                <el-row
                  style="flex-direction: column"
                  class="w-full"
                  align="middle"
                  ><el-col><span class="text-3xl">9,999,999</span></el-col>
                  <el-col>同比:<span>11%</span></el-col>
                  <el-col>累计客运量</el-col>
                </el-row>
              </el-col>
              <el-col :span="8">
                <el-row
                  style="flex-direction: column"
                  class="w-full"
                  align="middle"
                  ><el-col>出口:<span>99999</span></el-col>
                  <el-col>同比:<span>8%</span></el-col>
                </el-row>
              </el-col>
            </el-row>
          </el-col>
          <el-col class="w-full">
            <el-row class="w-full bigbox mt-9 py-5 px-1 text-sm" align="middle">
              <el-col :span="8">
                <el-row
                  style="flex-direction: column"
                  class="w-full"
                  align="middle"
                  ><el-col>进口:<span>99999</span></el-col>
                </el-row>
              </el-col>
              <el-col :span="8">
                <el-row
                  style="flex-direction: column"
                  class="w-full"
                  align="middle"
                  ><el-col><span class="text-3xl">1,672,384</span></el-col>
                  <el-col>今日客运量</el-col>
                </el-row>
              </el-col>
              <el-col :span="8">
                <el-row
                  style="flex-direction: column"
                  class="w-full"
                  align="middle"
                  ><el-col>出口:<span>99999</span></el-col>
                </el-row>
              </el-col>
            </el-row>
          </el-col>

          <el-col class="w-full">
            <el-row class="w-full bigbox mt-9 py-5 px-1 text-sm" align="middle">
              <el-col :span="8">
                <el-row
                  style="flex-direction: column"
                  class="w-full"
                  align="middle"
                  ><el-col>进口:<span>99999</span></el-col>
                  <el-col>同比:<span>8%</span> 环比:<span>-11%</span></el-col>
                </el-row>
              </el-col>
              <el-col :span="8">
                <el-row
                  style="flex-direction: column"
                  class="w-full"
                  align="middle"
                  ><el-col><span class="text-3xl">1,111,111</span></el-col>
                  <el-col>同比:<span>8%</span> 环比:<span>-11%</span></el-col>
                  <el-col>昨日客运量</el-col>
                </el-row>
              </el-col>
              <el-col :span="8">
                <el-row
                  style="flex-direction: column"
                  class="w-full"
                  align="middle"
                  ><el-col>出口:<span>99999</span></el-col>
                  <el-col>同比:<span>8%</span> 环比:<span>-11%</span></el-col>
                </el-row>
              </el-col>
            </el-row>
          </el-col>

          <el-col class="w-full mt-8">
            <div class="charts" ref="stackChart"></div>
          </el-col>
          <!-- <el-col><div ref="mychart3" class="charts"></div></el-col> -->
        </el-row>
      </el-col>

      <el-col :span="8">
        <el-row style="flex-direction: column" align="middle">
          <el-col><div ref="mychart6" class="charts"></div></el-col>
          <el-col><div ref="mychart7" class="charts"></div></el-col>
          <el-col><div ref="mychart8" class="charts"></div></el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
.bigbox {
  background: linear-gradient(45deg, #2511dfdb, #a4d4d8f5);
  border-radius: 20px;
  color: white;
  font-weight: bold;
}
.contanier {
  height: 100vh;
  overflow: auto;
}
.shape-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.charts {
  width: 500px;
  height: 280px;
}
.triangle {
  width: 0;
  height: 0;
  border-style: solid;
}

.left-triangle {
  border-width: 30px 20px 30px 0;
  border-color: transparent blue transparent transparent;
}

.rectangle {
  width: 450px;
  height: 60px;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
}

.right-triangle {
  border-width: 30px 0 30px 20px;
  border-color: transparent transparent transparent blue;
}
</style>
