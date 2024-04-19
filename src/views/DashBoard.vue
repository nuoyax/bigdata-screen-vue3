<script lang="ts">
import { defineComponent, onMounted } from "vue";
import DashBoardHeader from "@/components/DashBoardHeader.vue";
import warf from "@/assets/wharf.svg";
import car from "@/assets/car.svg";
import money from "@/assets/money.svg";
import clock from "@/assets/clock.svg";
import ship from "@/assets/ship.svg";
import bg from "@/assets/bg.jpg";
import { useRouter } from "vue-router";

export default defineComponent({
  components: { DashBoardHeader },
  setup() {
    const router = useRouter();
    const tableData = [
      {
        name: "双泰37",
        income: "5688.98万",
        sailCount: "661",
        average: "80652.89",
      },
      {
        name: "双泰36",
        income: "5688.98万",
        sailCount: "661",
        average: "80652.89",
      },
      {
        name: "双泰37",
        income: "5688.98万",
        sailCount: "661",
        average: "80652.89",
      },
      {
        name: "双泰37",
        income: "5688.98万",
        sailCount: "661",
        average: "80652.89",
      },
      {
        name: "双泰37",
        income: "5688.98万",
        sailCount: "661",
        average: "80652.89",
      },
    ];

    const viewIncome = () => {
      router.push("/incomeDetail");
    };
    const rowClick = (row: any, column: any, event: Event) => {
      console.log(row, column);
      router.push("/ShipDetail");
    };
  
    return {
      tableData,
      warf,
      car,
      money,
      clock,
      ship,
      bg,
      viewIncome,
      rowClick,
    };
  },
});
</script>
<template>
  <div>
    <dash-board-header></dash-board-header>
    <el-row class="row-h">
      <el-col :span="8" class="pr-2">
        <div class="ranks">
          <div class="rank">单船产值排行</div>
          <el-table
            :data="tableData"
            stripe
            style="width: 100%"
            @row-click="rowClick"
          >
            <el-table-column prop="name" label="船舶名称" />
            <el-table-column prop="income" label="累积收入" />
            <el-table-column prop="sailCount" label="航次" />
            <el-table-column prop="average" label="平均单航次产值" />
          </el-table>
        </div>
      </el-col>
      <el-col :span="8" class="pr-2">
        <div
          class="centre-box px-4"
          style="position: relative; overflow: hidden"
        >
          <img class="bg w-full" :src="bg" />
          <div class="mt-[12%] w-full">
            <el-row class="title text-center" justify="center">
              <el-col :span="8" class="pr-1">收入情况</el-col
              ><el-col :span="8" class="pr-1">运量统计</el-col
              ><el-col :span="8">份额占比</el-col>
            </el-row>

            <el-row class="bg-[white] w-full rounded-t-lg pt-5">
              <el-col :span="8" class="pr-2 pl-2">
                <div class="box">
                  <div>
                    <el-icon class="icon"><Tickets /></el-icon>
                  </div>
                  <div class="text-blue-900">昨日货车运量</div>
                  <div>8018</div>
                  <div class="text-xs text-blue-700">
                    进口:<span>111</span> 出口: <span>111</span>
                  </div>
                  <div class="text-xs text-blue-700">
                    同期:<span>111</span> 同期: <span>111</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8" class="pr-2">
                <div class="box">
                  <div>
                    <el-icon class="icon"><Van /></el-icon>
                  </div>
                  <div class="text-blue-900">昨日小车运量</div>
                  <div>8018</div>
                  <div class="text-xs text-blue-700">
                    进口:<span>111</span> 出口: <span>111</span>
                  </div>
                  <div class="text-xs text-blue-700">
                    同期:<span>111</span> 同期: <span>111</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="box">
                  <div>
                    <el-icon class="icon"><TrendCharts /></el-icon>
                  </div>
                  <div class="text-blue-900">昨日客运量</div>
                  <div>8018</div>
                  <div class="text-xs text-blue-700">
                    进口:<span>111</span> 出口: <span>111</span>
                  </div>
                  <div class="text-xs text-blue-700">
                    同期:<span>111</span> 同期: <span>111</span>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="row-box">
          <div class="exit">预约车辆（出口）</div>
          <el-row>
            <el-col :span="12" class="pr-2">
              <div class="common-col-box appoint-num blue">
                <div class="t">1396</div>
                <div>今日小车预约数</div>
              </div>
            </el-col>
            <el-col :span="12" class="pr-2"
              ><div class="common-col-box appoint-num green">
                <div class="t">1396</div>
                <div>次日小车预约数</div>
              </div>
            </el-col>
          </el-row>
          <el-row class="appoint-second">
            <el-col :span="12" class="pr-2">
              <div class="common-col-box appoint-num yellow">
                <div class="t">2151</div>
                <div>今日货车预约数</div>
              </div>
            </el-col>
            <el-col :span="12" class="pr-2">
              <div class="common-col-box appoint-num red">
                <div class="t">1234</div>
                <div>次日货车预约数</div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>

    <el-row class="row-h2" align="middle">
      <el-col :span="8">
        <el-row align="middle">
          <el-col :span="3"></el-col>
          <el-col :span="14">
            <el-row style="flex-direction: column" align="middle">
              <el-col class="mt-5">
                <el-row style="flex-direction: column" align="middle">
                  <el-col>￥10,0000</el-col>
                  <el-col
                    >累计收入(万元)同比 :<span style="color: red"
                      >18.46%</span
                    ></el-col
                  >
                  <el-col
                    ><el-button class="btn-w blue" @click="viewIncome"
                      >查看详情</el-button
                    ></el-col
                  >
                </el-row>
              </el-col>
              <el-col class="mt-5">
                <el-row style="flex-direction: column" align="middle">
                  <el-col>80%</el-col>
                  <el-col
                    >累计份额 同比 :<span style="color: green"
                      >-18.46%</span
                    ></el-col
                  >
                  <el-col
                    ><el-button class="btn-w blue2">查看详情</el-button></el-col
                  >
                </el-row>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="5"><img :src="money" /></el-col>
        </el-row>
      </el-col>
      <el-col :span="8">
        <el-row align="middle">
          <el-col :span="4">
            <el-row style="flex-direction: column" align="middle">
              <el-col>8087</el-col>
              <el-col>进口:6551</el-col>
              <el-col>出口:6141</el-col>
            </el-row>
          </el-col>
          <el-col :span="16">
            <el-row style="flex-direction: column" align="middle">
              <el-col><img class="warf" :src="warf" /></el-col>
              <el-col><div class="text-xl">今日运量数据</div></el-col>
              <el-col class="text-sm"
                >统计截止时间2024年4月18日 14点48分</el-col
              >
            </el-row>
          </el-col>
          <el-col :span="4">
            <el-row style="flex-direction: column" align="middle">
              <el-col>8087</el-col>
              <el-col>进口:6551</el-col>
              <el-col>出口:6141</el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="8">
        <el-row align="middle">
          <el-col :span="5">
            <img :src="car" />
          </el-col>
          <el-col :span="14">
            <el-row style="flex-direction: column" align="middle">
              <el-col class="mt-5">
                <el-row style="flex-direction: column" align="middle">
                  <el-col>￥10,0000</el-col>
                  <el-col
                    >累计客运量 同比:<span style="color: red"
                      >18.46%</span
                    ></el-col
                  >
                  <el-col
                    ><el-button class="btn-w purple"
                      >查看详情</el-button
                    ></el-col
                  >
                </el-row>
              </el-col>
              <el-col class="mt-5">
                <el-row style="flex-direction: column" align="middle">
                  <el-col>80%</el-col>
                  <el-col
                    >累计车运量 同比 :<span style="color: green"
                      >-18.46%</span
                    ></el-col
                  >
                  <el-col
                    ><el-button class="btn-w pink">查看详情</el-button></el-col
                  >
                </el-row>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="2"></el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row
      class="row-h3 bg-[#BADCF4] py-10 mt-4"
      align="middle"
      justify="center"
    >
      <el-col :span="8" class="border-r-2 border-[blue]">
        <el-row justify="center">
          <el-col class="pl-8"
            ><div class="flex items-end">
              <span><img :src="clock" /></span
              ><span class="text-xl ml-2">时长统计</span
              ><span class="text-xs mr-10">(分钟)</span
              ><el-button class="btn-w blue">查看详情</el-button>
            </div></el-col
          >
          <el-col class="mt-5">
            <el-row class="w-full">
              <el-col :span="12">
                <el-row
                  ><el-col class="text-center"> 小车</el-col>
                  <el-col>
                    <el-row>
                      <el-col :span="12">
                        <el-row style="flex-direction: column" align="middle">
                          <el-col> 装卸时长 </el-col>
                          <el-col> 107 </el-col>
                        </el-row></el-col
                      >
                      <el-col :span="12">
                        <el-row style="flex-direction: column" align="middle">
                          <el-col> 过海时长 </el-col>
                          <el-col> 107 </el-col>
                        </el-row></el-col
                      >
                    </el-row>
                  </el-col></el-row
                ></el-col
              >
              <el-col :span="12">
                <el-row
                  ><el-col class="text-center"> 货车</el-col>
                  <el-col>
                    <el-row class="flex">
                      <el-col :span="8">
                        <el-row style="flex-direction: column" align="middle">
                          <el-col> 待渡时长 </el-col>
                          <el-col> 107 </el-col>
                        </el-row></el-col
                      >
                      <el-col :span="8">
                        <el-row style="flex-direction: column" align="middle">
                          <el-col> 装卸时长 </el-col>
                          <el-col> 107 </el-col>
                        </el-row></el-col
                      >
                      <el-col :span="8">
                        <el-row style="flex-direction: column" align="middle">
                          <el-col> 过海时长 </el-col>
                          <el-col> 107 </el-col>
                        </el-row></el-col
                      >
                    </el-row>
                  </el-col></el-row
                >
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="16">
        <el-row justify="center">
          <el-col class="pl-4"
            ><div class="flex items-end">
              <span><img :src="ship" /></span
              ><span class="text-xl ml-2">航次统计</span
              ><span class="text-xs mr-10">(分钟)</span
              ><el-button class="btn-w pink">查看详情</el-button>
            </div></el-col
          >
          <el-col class="mt-5">
            <el-row>
              <el-col :span="8" class="border-r-2 border-[blue]">
                <el-row justify="center"
                  ><el-col class="text-center"> 今日</el-col>
                  <el-col>
                    <el-row>
                      <el-col :span="8">
                        <el-row style="flex-direction: column" align="middle">
                          <el-col> 进出口航次 </el-col>
                          <el-col> 107 </el-col>
                        </el-row></el-col
                      >
                      <el-col :span="8">
                        <el-row style="flex-direction: column" align="middle">
                          <el-col> 进口航次 </el-col>
                          <el-col> 107 </el-col>
                        </el-row></el-col
                      >
                      <el-col :span="8">
                        <el-row style="flex-direction: column" align="middle">
                          <el-col> 出口航次 </el-col>
                          <el-col> 107 </el-col>
                        </el-row></el-col
                      >
                    </el-row>
                  </el-col></el-row
                ></el-col
              >
              <el-col :span="8" class="border-r-2 border-[blue]">
                <el-row align="middle"
                  ><el-col class="text-center"> 昨日</el-col>
                  <el-col>
                    <el-row class="flex">
                      <el-col :span="8">
                        <el-row style="flex-direction: column" align="middle">
                          <el-col> 进出口航次 </el-col>
                          <el-col> 107 </el-col>
                        </el-row></el-col
                      >
                      <el-col :span="8">
                        <el-row style="flex-direction: column" align="middle">
                          <el-col> 进口航次 </el-col>
                          <el-col> 107 </el-col>
                        </el-row></el-col
                      >
                      <el-col :span="8">
                        <el-row style="flex-direction: column" align="middle">
                          <el-col> 出口航次 </el-col>
                          <el-col> 107 </el-col>
                        </el-row></el-col
                      >
                    </el-row>
                  </el-col></el-row
                >
              </el-col>
              <el-col :span="8">
                <el-row
                  ><el-col class="text-center"> 全年</el-col>
                  <el-col>
                    <el-row class="flex">
                      <el-col :span="8">
                        <el-row style="flex-direction: column" align="middle">
                          <el-col> 总航次 </el-col>
                          <el-col> 107 </el-col>
                        </el-row></el-col
                      >
                      <el-col :span="8">
                        <el-row style="flex-direction: column" align="middle">
                          <el-col> 最大日航次 </el-col>
                          <el-col> 107 </el-col>
                        </el-row></el-col
                      >
                      <el-col :span="8">
                        <el-row style="flex-direction: column" align="middle">
                          <el-col> 平均单船产值 </el-col>
                          <el-col> 107 </el-col>
                        </el-row></el-col
                      >
                    </el-row>
                  </el-col></el-row
                >
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
.bg {
  position: absolute;
  left: 0px;
  top: -180px;
  z-index: -1;
  opacity: 0.1;
}
.warf {
  width: 125px;
}

.row-h3 {
  min-height: 200px;
  img {
    width: 30px;
    height: 30px;
    display: inline;
  }
}
.btn-w {
  width: 200px;
  &.blue {
    background: #009ab1;
    color: #fff;
  }
  &.blue2 {
    background: #00468d;
    color: #fff;
  }
  &.purple {
    background: #4f55c4;
    color: #fff;
  }
  &.pink {
    background: #7e0052;
    color: #fff;
  }
}
.mg10 {
  margin-top: 10px;
}
.icon {
  font-size: 50px;
}
.row-h2 {
  margin: 2px 0px;
  min-height: 140px;
}
.rank {
  font-size: 16px;
  font-weight: 600;
  background: #51a4e6;
  color: white;
  line-height: 40px;
}
.exit {
  color: #2167bd;
  line-height: 40px;
  font-size: 20px;
  font-weight: 700;
}
.appoint-second {
  margin-top: 10px;
}
.row-box {
  margin-top: 0px;
}
.appoint-num {
  font-size: 20px;
  padding: 20px 0px;
  &.blue {
    border-left: 6px solid #2b5db7;

    background: rgba(173, 193, 235, 1);
    .t {
      font-weight: 700;
      color: #2b5db7;
    }
  }
  &.green {
    border-left: 6px solid #5b9e9e;
    .t {
      font-weight: 700;
      color: #5b9e9e;
    }
    background: rgba(181, 206, 222, 1);
  }
  &.yellow {
    border-left: 6px solid #9d8757;
    .t {
      font-weight: 700;
      color: #9d8757;
    }
    background: rgba(192, 202, 205, 1);
  }
  &.red {
    border-left: 6px solid #925e72;
    .t {
      font-weight: 700;
      color: #925e72;
    }
    background: rgba(199, 198, 218, 1);
  }
}
.common-col-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.row-h {
  min-height: 300px;
  overflow: hidden;
  padding: 5px;
}
.centre-box {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  .title {
    margin-bottom: 10px;
    div {
      font-weight: 700;
    }
  }

  .box {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
