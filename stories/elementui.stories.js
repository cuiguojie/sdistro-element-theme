/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
// import { notes } from '@storybook/addon-notes';
// import StoryRouter from 'storybook-vue-router';
// import store from '@/store';

storiesOf('ElementUI|Form', module)
  .add('Input', () => ({
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
        <ElFormItem label="默认">
          <ElInput
            placeholder="请输入内容"
            v-model="text"
          />
        </ElFormItem>
        <ElFormItem label="密码输入框">
          <ElInput
            type="password"
            placeholder="请输入密码"
            v-model="password"
          />
        </ElFormItem>
        <ElFormItem label="禁用状态">
          <ElInput
            :disabled="true"
            placeholder="请输入内容"
            v-model="disabled"
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
  .add('Radio', () => ({
    data() {
      return {
        isChecked: 1,
      };
    },
    template: `
      <ElForm label-position="top">
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
          <p class="sd-form-tips">注：没有做多行样式，一般情况下选项过多应该使用 Select 组件</p>
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
  .add('Checkbox', () => ({
    data() {
      return {
        isChecked: false,
      };
    },
    template: `
      <ElForm label-position="top">
        <ElFormItem label="基础">
          <ElCheckbox
            v-model="isChecked"
          >
            唱片公司或厂牌
          </ElCheckbox>
          <p class="sd-form-tips">注：目前仅在注册用到，文本颜色使用的是灰度色</p>
        </ElFormItem>
      </ElForm>
    `,
  }))
  .add('Select', () => ({
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
      <ElFormItem label="基础">
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
      <ElFormItem label="分组及可搜索">
        <ElSelect
          v-model="groupOptionArea"
          filterable
          popper-class="area-select"
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
  .add('FormItem', () => ({
    data() {
      return {
        text: '',
        isChecked: false,
      };
    },
    template: `
    <div>
      <h2>Label 上对齐</h2>
      <ElForm label-position="top">
        <ElFormItem label="普通">
          <ElInput
            v-model="text"
          />
        </ElFormItem>
        <ElFormItem
          label="必选"
          required
        >
          <ElInput
            v-model="text"
          />
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
    </div>
    `,
  }));

storiesOf('ElementUI|Dialog', module)
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
  }));

storiesOf('ElementUI|Table', module)
  .add('基础', () => ({
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
      };
    },
    template: `
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
    `,
  }))
  .add('空数据', () => ({
    data() {
      return {
        list: [],
      };
    },
    template: `
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
    `,
  }));
