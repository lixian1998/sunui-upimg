//你的阿里云地址最后面跟上一个/   在你当前小程序的后台的uploadFile 合法域名也要配上这个域名
let fileHost = 'xxxx/';

let config = {
	// 默认存在根目录，可根据需求改
	uploadImageUrl: `${fileHost}`,
	// AccessKeySecret 去你的阿里云上控制台上找
	AccessKeySecret: 'xxx',
	// AccessKeyId 去你的阿里云上控制台上找
	OSSAccessKeyId: 'xxx',
	//这个是上传文件时Policy的失效时间
	timeout: 87600
};

module.exports = config
