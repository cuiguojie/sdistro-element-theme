/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
// import { notes } from '@storybook/addon-notes';
// import StoryRouter from 'storybook-vue-router';
// import store from '@/store';

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
