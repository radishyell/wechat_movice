//  小程序主入口 授权 中转页面

import store from '../../../utils/store';
import create from '../../../utils/lib/westore/create';
import regeneratorRuntime from '../../../utils/lib/runtime';

create(store, {
	data: {
		searchList: [],
	},
	onLoad() {
		this.resetList();
	},
	onChange(params) {
		const detail = params.detail;
		if (!detail) {
			this.resetList();
		} else {
			this.searchMovice(detail);
		}
	},
	async searchMovice(params) {
		this.selectComponent('#empty').showEmpty();
		const result = await this.store.api.searchMovice(params);
		if (result.isSuccess) {
			this.setData({ searchList: result.data });
		}
		if (this.data.searchList.length) {
			this.selectComponent('#empty').hiddenEmpty();
		} else {
			this.selectComponent('#empty').showEmpty({}, false);
		}
	},
	singleTap(params) {
		const item = params.currentTarget.dataset.item;
		if (!item || !item.id) return;
		wx.navigateTo({ url: `/pages/home/detail/index?id=${item.id}` });
	},
	resetList() {
		this.setData({ searchList: [] });
		this.selectComponent('#empty').showEmpty({}, false);
	}
});


