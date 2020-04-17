/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
// import { notes } from '@storybook/addon-notes';
// import StoryRouter from 'storybook-vue-router';
// import store from '@/store';

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
  .add('Popconfirm',
    () => ({
      data() {
        return {
          active: '1',
          active2: [],
        };
      },
      template: `
        <div>
          <ElPopconfirm
            title="确认重置？"
            cancel-button-type=""
            cancel-button-size=""
            placement="bottom-start"
            :visible-arrow="false"
            :hide-icon="true"
            :width="256"
          >
            <a
              slot="reference"
              href="#"
              @click.prevent
            >重置该发票</a>
          </ElPopconfirm>
        </div>
      `,
    }),
    {
      notes: '',
    })
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
          <div class="sd-drawer__container">
            <div class="sd-drawer__content">
              <p>内容</p>
              <p>内容</p>
              <p>内容</p>
            </div>
          </div>
        </ElDrawer>
      </div>
    `,
    methods: {
      showDrawer() {
        this.isShow = true;
      },
    },
  }));
