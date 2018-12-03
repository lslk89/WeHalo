// pages/post/post.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        scrollTop: 0,
        linenums: false,
        spinShow: true,
        Author: "Halo · Aquan",
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

        this.setData({
            postId: options.postId,
        })

        // wx.showNavigationBarLoading() //在标题栏中显示加载
        var that = this//不要漏了这句，很重要
        var postId = options.postId
        var url = app.globalData.URL + '/api/posts/' + postId
        var userAvatarUrl = app.globalData.URL

        //微信自带Loading效果
        // wx.showLoading({
        //   title: '加载中',
        // })
        wx.request({
            url: url,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            success: function (res) {
                console.log(res.data.result)
                that.setData({
                    post: res.data.result,
                })
                //取消Loading效果
                // wx.hideLoading()

                //动态设置当前页面的标题
                wx.setNavigationBarTitle({
                    title: res.data.result.postTitle,
                })
            }
        })

        setTimeout(function () {
            that.setData({
                spinShow: !that.data.spinShow,
            });
            // console.log("spinShow");
        }.bind(that), 2000)

    },


    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },

})