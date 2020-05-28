/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
// import { notes } from '@storybook/addon-notes';
// import StoryRouter from 'storybook-vue-router';
// import store from '@/store';

storiesOf('Basic', module)
  .add('Button 按钮',
    () => ({
      template: `
        <div>
          <h4>基础用法</h4>
          <ElButton>默认按钮</ElButton>
          <ElButton type="primary">主按钮</ElButton>
          <h4>不同尺寸</h4>
          <ElButton>默认按钮</ElButton>
          <ElButton type="primary">默认按钮</ElButton>
          <ElButton size="small">小型 small 按钮</ElButton>
          <ElButton size="mini">超小 mini 按钮</ElButton>
        </div>
      `,
    }),
    {
      notes: '目前尺寸只用到了 <code>普通</code> 和 <code>mini</code> 两种，暂时只定义这两种样式；ElementUI 自带的 弹窗混用了 mini 和 small，两者直接统一',
    });
