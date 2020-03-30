/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
// import { notes } from '@storybook/addon-notes';
// import StoryRouter from 'storybook-vue-router';
// import store from '@/store';

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
