// 空视图页面，用于页面没东西的时候做跳板
/**
 * 空视图的显示
 * const config = {
		callBack: ()=>{
			console.log(' === home back ==');
			
		},
		btnText: '马上刷新'
	}
	this.selectComponent('#empty').showLoading(config);
	this.selectComponent('#empty').showEmpty(config);


	空视图的隐藏
	this.selectComponent('#empty').hidde();


 * 
 * 
 * */ 


Component({
	data: {
		config: {},
		isShow: false,
	},
	methods: {
		btnTap() {
			if (this.data.config.callBack) {
				this.data.config.callBack();
			}
		},
		showEmpty(config = null) {
			this.show(config, false);
		},
		showLoading(config = null) {
			this.show(config, true);
		},
		show(config = null, isLoading = true) {
			const defaultConfig = {
				title: isLoading ? '正在努力为您加载...':'暂无数据',
				imagePath: isLoading ? './loading.png' : './placehoder.png',
				isLoading,
			};
			if (config) { Object.assign(defaultConfig, config); }
			this.setData({
				config: defaultConfig,
				isShow: true
			});
		},
		hidde() {
			if (this.data.isShow) {
				this.setData({ isShow: false });
			}
		}
	},
	ready() {
		// this.showEmpty();
	}
})