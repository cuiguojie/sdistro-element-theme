/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
// import { notes } from '@storybook/addon-notes';
// import StoryRouter from 'storybook-vue-router';
// import store from '@/store';

storiesOf('Form', module)
  .add('Radio 单选框', () => ({
    data() {
      return {
        isChecked: 1,
      };
    },
    template: `
      <ElForm label-position="top">
        <ElFormItem label="使用说明">
          <p class="sd-form-tips">固定样式，<strong>不接受</strong> Element-UI 中的 <code>size</code> 参数</p>
        </ElFormItem>

        <ElFormItem label="单选框组">
          <ElRadioGroup
            v-model="isChecked"
          >
            <ElRadio
              :label="1"
            >
              唱片公司或厂牌
            </ElRadio>
            <ElRadio
              :label="2"
            >
              个人工作室
            </ElRadio>
            <ElRadio
              :label="3"
            >
              版权代理机构
            </ElRadio>
          </ElRadioGroup>
          <p class="sd-form-tips">注：没有考虑选项过多情况下的纵向排版，一般情况下多选项应使用 Select 组件</p>
        </ElFormItem>

        <ElFormItem label="禁用状态">
          <ElRadio
            :label="1"
            disabled
          >
            唱片公司或厂牌
          </ElRadio>
          <ElRadio
            :label="2"
            disabled
          >
            个人工作室
          </ElRadio>
          <ElRadio
            :label="3"
            disabled
          >
            版权代理机构
          </ElRadio>
        </ElFormItem>

        <ElFormItem label="按钮样式">
          <ElRadioGroup
            v-model="isChecked"
          >
            <ElRadioButton
              :label="1"
            >
              唱片公司或厂牌
            </ElRadioButton>
            <ElRadioButton
              :label="2"
            >
              个人工作室
            </ElRadioButton>
            <ElRadioButton
              :label="3"
            >
              版权代理机构
            </ElRadioButton>
          </ElRadioGroup>
        </ElFormItem>
      </ElForm>
    `,
  }))
  .add('Checkbox 多选框', () => ({
    data() {
      return {
        checkbox1: false,
        checkbox2: false,
        checklist: [],
      };
    },
    template: `
      <ElForm label-position="top">
        <ElFormItem label="使用说明">
          <p class="sd-form-tips">通行证页面用到的是独立样式，不在全局样式中定义，具体使用场景自行覆盖</p>
        </ElFormItem>

        <ElFormItem label="基础用法">
          <ElCheckbox
            v-model="checkbox1"
          >
            备选项
          </ElCheckbox>
        </ElFormItem>

        <ElFormItem label="禁用状态">
          <ElCheckbox
            v-model="checkbox2"
            disabled
          >
            备选项
          </ElCheckbox>
        </ElFormItem>

        <ElFormItem label="多选框组">
          <ElCheckboxGroup v-model="checklist">
            <ElCheckbox
              :label="1"
            >
              备选项 1
            </ElCheckbox>
            <ElCheckbox
              :label="2"
            >
              备选项 2
            </ElCheckbox>
            <ElCheckbox
              :label="3"
            >
              备选项 3
            </ElCheckbox>
          </ElCheckboxGroup>
        </ElFormItem>
      </ElForm>
    `,
  }))
  .add('Input 输入框', () => ({
    data() {
      return {
        text: '',
        password: '',
        disabled: '已输入内容',
        textarea: '',
        prepend: '',
      };
    },
    template: `
      <ElForm label-position="top">
        <ElFormItem label="基础用法">
          <ElInput
            placeholder="请输入内容"
            v-model="text"
          />
        </ElFormItem>

        <ElFormItem label="禁用状态">
          <ElInput
            :disabled="true"
            placeholder="请输入内容"
            v-model="disabled"
          />
        </ElFormItem>

        <ElFormItem label="密码框">
          <ElInput
            type="password"
            placeholder="请输入密码"
            v-model="password"
          />
        </ElFormItem>

        <ElFormItem label="文本域">
          <ElInput
            type="textarea"
            placeholder="请输入内容"
            v-model="textarea"
          />
        </ElFormItem>

        <ElFormItem label="复合输入框">
          <ElInput
            placeholder="请输入内容"
            v-model="prepend"
          >
            <template slot="prepend">Https://</template>
          </ElInput>
        </ElFormItem>
      </ElForm>
    `,
  }))
  .add('Select 选择器', () => ({
    data() {
      return {
        optionArea: '',
        groupOptionArea: '',
        options: [
          {
            value: '6',
            label: '阿尔巴尼亚',
          },
          {
            value: '7',
            label: '安道尔',
          },
          {
            value: '8',
            label: '奥地利',
          },
          {
            value: '9',
            label: '澳大利亚',
          },
          {
            value: '10',
            label: '阿尔及利亚',
          },
        ],
        groupOptions: [
          {
            label: '热门国家 / 地区',
            options: [
              {
                value: 'Shanghai',
                label: '上海',
              },
              {
                value: 'Beijing',
                label: '北京',
              },
            ],
          },
          {
            label: 'A',
            options: [
              {
                value: '1',
                label: '阿尔巴尼亚',
              },
              {
                value: '2',
                label: '安道尔',
              },
              {
                value: '3',
                label: '奥地利',
              },
              {
                value: '4',
                label: '澳大利亚',
              },
              {
                value: '5',
                label: '阿尔及利亚',
              },
            ],
          },
          {
            label: 'B',
            options: [
              {
                value: '6',
                label: '阿尔巴尼亚',
              },
              {
                value: '7',
                label: '安道尔',
              },
              {
                value: '8',
                label: '奥地利',
              },
              {
                value: '9',
                label: '澳大利亚',
              },
              {
                value: '10',
                label: '阿尔及利亚',
              },
            ],
          },
          {
            label: 'C',
            options: [
              {
                value: '6',
                label: '阿尔巴尼亚',
              },
              {
                value: '7',
                label: '安道尔',
              },
              {
                value: '8',
                label: '奥地利',
              },
              {
                value: '9',
                label: '澳大利亚',
              },
              {
                value: '10',
                label: '阿尔及利亚',
              },
            ],
          },
          {
            label: 'D',
            options: [
              {
                value: '6',
                label: '阿尔巴尼亚',
              },
              {
                value: '7',
                label: '安道尔',
              },
              {
                value: '8',
                label: '奥地利',
              },
              {
                value: '9',
                label: '澳大利亚',
              },
              {
                value: '10',
                label: '阿尔及利亚',
              },
            ],
          },
        ],
      };
    },
    template: `<ElForm label-position="top">
      <ElFormItem label="使用说明">
        <div class="sd-form-tips">
          <p>选项组窗口的宽度规则为：Select 宽度小于 392px 时，窗口宽度 392px; Select 宽度大于 392px 时，窗口宽度等于 Select 宽度</p>
          <p>TODO: 下拉箭头覆写</p>
        </div>
      </ElFormItem>

      <ElFormItem label="基础用法">
        <ElSelect
          v-model="optionArea"
        >
          <ElOption
            v-for="(item, index) in options"
            :key="index"
            :label="item.label"
            :value="item.value"
          />
        </ElSelect>
      </ElFormItem>

      <ElFormItem label="禁用状态">
        <ElSelect
          v-model="optionArea"
          disabled
        >
          <ElOption
            v-for="(item, index) in options"
            :key="index"
            :label="item.label"
            :value="item.value"
          />
        </ElSelect>
      </ElFormItem>

      <ElFormItem label="分组及可搜索">
        <ElSelect
          v-model="groupOptionArea"
          filterable
        >
          <ElOptionGroup
            v-for="(group, groupIndex) in groupOptions"
            :key="groupIndex"
            :label="group.label"
          >
            <ElOption
              v-for="(item, itemIndex) in group.options"
              :key="itemIndex"
              :label="item.label"
              :value="item.value"
            />
          </ElOptionGroup>
        </ElSelect>
      </ElFormItem>
    </ElForm>`,
  }))
  .add('DatePicker 日期选择器', () => ({
    data() {
      return {
        basic: '',
        daterange: '',
      };
    },
    template: `
      <ElForm label-position="top">
        <ElFormItem label="使用说明">
          <div class="sd-form-tips">
            <p>侵入式自定义比较多，基本上限定了使用方式。需指定 <code>prefix-icon="el-icon-caret-bottom"</code> 和 <code>:clearable="false"</code></p>
            <p>TODO: 下拉箭头覆写</p>
          </div>
        </ElFormItem>

        <ElFormItem label="选择日期">
          <ElDatePicker
            v-model="basic"
            placeholder="yyyy/mm/dd"
            value-format="yyyy-MM-dd"
            prefix-icon="el-icon-caret-bottom"
            :clearable="false"
          />
        </ElFormItem>

        <ElFormItem label="选择日期范围">
          <ElDatePicker
            v-model="daterange"
            type="daterange"
            unlink-panels
            range-separator="～"
            prefix-icon="el-icon-caret-bottom"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :editable="false"
            :clearable="false"
          />
        </ElFormItem>
      </ElForm>
    `,
  }))
  .add('Form 表单', () => ({
    data() {
      return {
        text: '',
        select: '1',
        isChecked: false,
        labelPosition: 'top',
        inline: false,
      };
    },
    template: `
      <ElForm
        :label-position="labelPosition"
        label-width="150px"
        :inline="inline"
      >
        <ElRadioGroup
          v-model="labelPosition"
        >
          <ElRadioButton
            label="top"
          >
            顶部对齐
          </ElRadioButton>
          <ElRadioButton
            label="left"
          >
            左对齐
          </ElRadioButton>
          <ElRadioButton
            label="right"
          >
            右对齐
          </ElRadioButton>
        </ElRadioGroup>

        <ElRadioGroup
          v-model="inline"
        >
          <ElRadioButton
            :label="true"
          >
            行内表单 开启
          </ElRadioButton>
          <ElRadioButton
            :label="false"
          >
            行内表单 关闭
          </ElRadioButton>
        </ElRadioGroup>
        <br>
        <br>

        <ElFormItem label="使用说明">
          <div class="sd-form-tips">
            出于多语言切换需求，不方便控制 <code>label-width</code> 宽度，目前前台项目仅用到 顶对齐、非行内 的模式。
          </div>
        </ElFormItem>

        <ElFormItem label="普通">
          <ElInput
            v-model="text"
          />
        </ElFormItem>

        <ElFormItem
          label="必选"
          required
        >
          <ElSelect
            v-model="select"
            placeholder="请选择"
          >
            <ElOption label="1" value="1" />
            <ElOption label="2" value="2" />
          </ElSelect>
        </ElFormItem>

        <ElFormItem
          label="单 FormItem 内分组"
        >
          <ElInput
            v-model="text"
            placeholder="第一个输入框"
          />
          <div class="sd-form-item--more">
            <ElInput
              v-model="text"
              placeholder="第二个输入框"
            />
          </div>
        </ElFormItem>
      </ElForm>
    `,
  }));

storiesOf('Data', module)
  .add('Table 表格', () => ({
    data() {
      return {
        list: [
          {
            id: 0,
            user_name: '看见网络科技（上海）有限公司',
            client_id: 'HW1719-J012',
            user_email: 'abc@kanjian.com',
            type: '国内大合同',
            status: '未生效',
          },
          {
            id: 0,
            user_name: '看见网络科技（上海）有限公司看见网络科技（上海）有限公司',
            client_id: 'HW1719-J012',
            user_email: 'abc@kanjian.com',
            type: '国内大合同',
            status: '生效中',
          },
          {
            id: 0,
            user_name: 'NeoBaran',
            client_id: 'HW1719-J012',
            user_email: 'abc@kanjian.com',
            type: '国内大合同',
            status: '已过期',
          },
        ],
        noContent: [],
      };
    },
    template: `
      <div>
        <h4>普通</h4>
        <ElTable
          :data="list"
        >
          <ElTableColumn
            prop="user_name"
            label="用户名"
          />

          <ElTableColumn
            prop="user_email"
            label="账号"
          />

          <ElTableColumn
            prop="client_id"
            label="Client_ID"
          />

          <ElTableColumn
            prop="type"
            label="身份类型"
          />

          <ElTableColumn
            label="审核状态"
          >
            <template slot-scope="scope">
              <span
                class="sd-icon-status"
                :class="{
                  'sd-icon-status--green': scope.row.status === '生效中',
                  'sd-icon-status--gray': scope.row.status === '已过期',
                  'sd-icon-status--yellow': scope.row.status === '未生效',
                }"
              />{{ scope.row.status }}
            </template>
          </ElTableColumn>
        </ElTable>

        <h4>空数据</h4>
        <ElTable
          :data="noContent"
        >
          <ElTableColumn
            prop="user_name"
            label="用户名"
          />

          <ElTableColumn
            prop="user_email"
            label="账号"
          />

          <ElTableColumn
            prop="client_id"
            label="Client_ID"
          />

          <ElTableColumn
            prop="type"
            label="身份类型"
          />

          <ElTableColumn
            label="审核状态"
          >
            <template slot-scope="scope">
              <span
                class="sd-icon-status"
                :class="{
                  'sd-icon-status--green': scope.row.status === '生效中',
                  'sd-icon-status--gray': scope.row.status === '已过期',
                  'sd-icon-status--yellow': scope.row.status === '未生效',
                }"
              />{{ scope.row.status }}
            </template>
          </ElTableColumn>
        </ElTable>
      </div>
    `,
  }))
  .add('Tag 标签',
    () => ({
      data() {
        return {
          list: [
            {
              name: '标签1',
            },
            {
              name: '标签2',
            },
            {
              name: '标签3',
            },
            {
              name: '标签4',
            },
          ],
        };
      },
      methods: {
        removeItem(index) {
          this.list.splice(index, 1);
        },
      },
      template: `
        <div>
          <ElTag
            v-for="(item, index) in list"
            :key="index"
            closable
            @close="removeItem(index)"
          >
            {{ item.name }}
          </ElTag>
        </div>
      `,
    }),
    {
      notes: '目前仅对默认的 `light` 主题做了覆写，并且 `type` 和 `size` 均使用默认值； `disable-transitions` 未作修改，但是当前版本 `10.12.0` 动画位置看上去有些问题，实际使用建议开启',
    })
  .add('Pagination 分页', () => ({
    data() {
      return {
        size: 20,
        total: 100,
        cur: 0,
      };
    },
    template: `
      <ElPagination
        layout="total, prev, pager, next, jumper, sizes"
        :page-size.sync="size"
        :total="total"
        :current-page="cur"
      />
    `,
  }));

storiesOf('Navigation', module)
  .add('Tabs 标签页', () => ({
    data() {
      return {
        activeTab: 'first',
      };
    },
    template: `
      <ElTabs
        v-model="activeTab"
      >
        <ElTabPane
          name="first"
          label="待审核"
        >
          第一个标签页
        </ElTabPane>
        <ElTabPane
          name="second"
          label="审核未通过"
        >
          第二个标签页
        </ElTabPane>
        <ElTabPane
          name="third"
          label="审核已通过"
        >
          第三个标签页
        </ElTabPane>
      </ElTabs>
    `,
  }));

storiesOf('Others', module)
  .add('Dialog', () => ({
    data() {
      return {
        isShow: false,
      };
    },
    template: `
      <div>
        <button @click.prevent="showDialog">打开弹窗</button>
        <ElDialog
          :visible.sync="isShow"
          title="对话框标题"
        >
          内容
        </ElDialog>
      </div>
    `,
    methods: {
      showDialog() {
        this.isShow = true;
      },
    },
  }))
  .add('Collapse',
    () => ({
      data() {
        return {
          active: '1',
          active2: [],
        };
      },
      template: `
        <div>
          <h4>普通模式</h4>
          <ElCollapse
            v-model="active2"
          >
            <ElCollapseItem
              title="一致性 Consistency"
              name="1"
            >
              <div>
                与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>
                在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
              </div>
            </ElCollapseItem>
            <ElCollapseItem
              title="反馈 Feedback"
              name="2"
            >
              <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
              <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </ElCollapseItem>
            <ElCollapseItem
              title="效率 Efficiency"
              name="3"
            >
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
            </ElCollapseItem>
          </ElCollapse>
          <h4>手风琴模式</h4>
          <ElCollapse
            v-model="active"
            accordion
          >
            <ElCollapseItem
              title="一致性 Consistency"
              name="1"
            >
              <div>
                与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>
                在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
              </div>
            </ElCollapseItem>
            <ElCollapseItem
              title="反馈 Feedback"
              name="2"
            >
              <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
              <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </ElCollapseItem>
            <ElCollapseItem
              title="效率 Efficiency"
              name="3"
            >
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
            </ElCollapseItem>
          </ElCollapse>
        </div>
      `,
    }),
    {
      notes: '设计中，实际内容上边缘和标题文本下边缘固定间距 24px, 但是标题区折叠时固定高度，且字号大小不同，无法统一样式，需要在业务场景中覆写 <code>.el-collapse-item__content</code> 的内顶边距',
    })
  .add('Drawer', () => ({
    data() {
      return {
        isShow: false,
      };
    },
    template: `
      <div>
        <button @click.prevent="showDrawer">打开抽屉</button>
        <ElDrawer
          title="抽屉标题"
          :visible.sync="isShow"
        >
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
        </ElDrawer>
      </div>
    `,
    methods: {
      showDrawer() {
        this.isShow = true;
      },
    },
  }));
