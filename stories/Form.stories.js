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
          {
            value: '11',
            label: '苏维埃共和国',
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
        multiple: [],
      };
    },
    template: `<ElForm label-position="top">
      <ElFormItem label="使用说明">
        <div class="sd-form-tips">
          <p>分组菜单浮层的宽度规则为：Select 宽度小于 392px 时，窗口宽度 392px; Select 宽度大于 392px 时，窗口宽度等于 Select 宽度</p>
          <p>多选 <code>multiple</code> 目前限定 <code>collapse-tags</code> 模式</p>
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

      <ElFormItem label="多选">
        <ElSelect
          v-model="multiple"
          multiple
          collapse-tags
        >
          <ElOption
            v-for="(option, index) in options"
            :key="index"
            :label="option.label"
            :value="option.value"
          />
        </ElSelect>
      </ElFormItem>
    </ElForm>`,
  }))
  .add('Cascader 级联选择器', () => ({
    data() {
      return {
        options: [
          {
            id: 1,
            name: '中国',
            children: [
              {
                id: 11,
                name: '上海',
              },
              {
                id: 12,
                name: '北京',
              },
              {
                id: 13,
                name: '天津',
              },
              {
                id: 14,
                name: '重庆',
              },
              {
                id: 15,
                name: '哈尔滨',
              },
              {
                id: 16,
                name: '长春',
              },
              {
                id: 17,
                name: '大连',
              },
              {
                id: 18,
                name: '石家庄',
              },
            ],
          },
          {
            id: 2,
            name: '美国',
            children: [
              {
                id: 21,
                name: '纽约',
              },
              {
                id: 22,
                name: '华盛顿',
              },
            ],
          },
          {
            id: 3,
            name: '英国',
            children: [
              {
                id: 31,
                name: '伦敦',
              },
            ],
          },
          {
            id: 4,
            name: '法国',
            children: [
              {
                id: 41,
                name: '巴黎',
              },
            ],
          },
          {
            id: 5,
            name: '德国',
            children: [
              {
                id: 51,
                name: '柏林',
              },
            ],
          },
          {
            id: 6,
            name: '意大利',
            children: [
              {
                id: 61,
                name: '罗马',
              },
            ],
          },
        ],
      };
    },
    template: `<ElForm label-position="top">
      <ElFormItem label="使用说明">
        <div class="sd-form-tips">
          <p></p>
        </div>
      </ElFormItem>

      <ElFormItem label="基础用法">
        <ElCascader
          v-model="value"
          :options="options"
          :props="{
            value: 'id',
            label: 'name',
          }"
        />
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
      const isPhone = (rule, val, callback) => {
        if (val.length !== 11 && val !== '') {
          callback(new Error('长度不符合规则'));
        }
      };

      return {
        text: '',
        select: '1',
        isChecked: false,
        labelPosition: 'top',
        inline: false,

        rules: {
          name: [
            {
              required: true,
            },
            {
              min: 3,
              max: 5,
              trigger: 'blur',
            },
          ],
          typeId: [
            {
              required: true,
            },
          ],
          typeIds: [
            {
              required: true,
            },
          ],
          phone: [
            {
              validator: isPhone,
              trigger: 'blur',
            },
          ],
        },
        data: {
          name: '',
          typeId: null,
          typeIds: [],
          phone: '',
          qq: '',
        },
      };
    },
    template: `<div>
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
      </ElForm>

      <ElForm
        label-position="top"
        :model="data"
        :rules="rules"
        :show-message="false"
      >
        <ElFormItem
          label="文本"
          prop="name"
        >
          <ElInput v-model="data.name" />
          <div class="sd-form-item--more">3-5字符，必填</div>
        </ElFormItem>

        <ElFormItem
          label="单 FormItem 内分组"
        >
          <ElFormItem>
            <ElInput
              v-model="data.qq"
              placeholder="QQ"
            />
          </ElFormItem>

          <ElFormItem
            prop="phone"
          >
            <ElInput
              v-model="data.phone"
              placeholder="电话，非必填，11位"
            />
          </ElFormItem>
        </ElFormItem>

        <ElFormItem
          label="单选"
          prop="typeId"
        >
          <ElSelect
            v-model="data.typeId"
          >
            <ElOption label="选项 1" :value="1" />
            <ElOption label="选项 2" :value="2" />
          </ElSelect>
        </ElFormItem>

        <ElFormItem
          label="多选"
          prop="typeIds"
        >
          <ElSelect
            v-model="data.typeIds"
            multiple
            collapse-tags
          >
            <ElOption label="选项 1" :value="1" />
            <ElOption label="选项 2" :value="2" />
          </ElSelect>
          <div class="sd-form-item--more">多选，至少选择一项</div>
        </ElFormItem>
      </ElForm>
    </div>`,
  }));
