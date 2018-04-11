import React from 'react'
import $ from 'jquery'
import {Router,Route,Link,hashHistory,IndexRedirect,IndexRoute} from 'react-router'
require('../style/jj-header.css')



class Imp extends React.Component{
	
	constructor(props){
		super(props)
	}
	
	
	componentDidMount(){
		$('.jj-hid').on('click',function(){
			$('.jj-hidbox').hide()
		})
		
		$('.jj-fhbtn').on('click',function(){
			$("html,body").animate({scrollTop:0}, 500);
		})
		
		
		
		
	}
	render(){
		return(
			<div>
				<div className="jj-header">
				<div className="jj-header-top clear">
					<div className="jj-htop-l">
						<i></i>
						<p>客服热线：400-830-7266</p>
					</div>
					<div className="jj-htop-r">
						<ul>
							<li><a href="javascript:;">登录</a></li>
							<li><a href="javascript:;">注册有礼</a></li>
							<li><a href="javascript:;">VIP</a></li>
							<li><a href="javascript:;">壹佰社区</a></li>
							<li><a href="javascript:;">新手指引</a></li>
							<li><a href="javascript:;">帮助中心</a></li>
							<li><a href="javascript:;">关于我们</a></li>
							<li><a href="javascript:;" className="jj-0">手机APP</a><span className="app_erwm"><img src="https://static.pp100.com/static/public/images/downloadAPP.png"/></span></li>
						</ul>
					</div>
				</div>
				
				<div className="jj-header-bot clear">
					<div className="jj-Logo">
						<a href="javascript:;">
							<img src="https://static.pp100.com/static/public/images/logo02.gif"/>
						</a>
					</div>
					<div className="jj-nav">
						<ul>
							<li><a href="javascript:;" className="jj-1">首页</a></li>
							<li className="jj-2">
								<a href="javascript:;">保障措施</a>
								<div>
									<ul>
										<li><a href="javascript:;">四大保障体系</a></li>
										<li><a href="javascript:;">第三方机构代偿保障</a></li>
									</ul>
								</div>
							</li>
							<li className="jj-3">
								<a href="javascript:;">信息披露</a>
								<div>
									<ul>
										<li><a href="javascript:;">关于我们</a></li>
										<li><a href="javascript:;">数据专区</a></li>
										<li><a href="javascript:;">风险教育</a></li>
										<li><a href="javascript:;">合规化进程</a></li>
										<li><a href="javascript:;">争议调解</a></li>
									</ul>
								</div>
							</li>
							<li><a href="javascript:;">邀请返利</a></li>
							<li><a href="javascript:;">活动专区</a></li>
						</ul>
					</div>
				</div>
				</div>
				
				
				
				{this.props.children}
				
				
				
				
				<div className="jj-footer">
					<div className="jj-footer-top clear">
						<div className="jj-ftop-l">
							<ul>
							 <li><a href="">公司介绍</a></li>
							 <li><a href="">保障措施</a></li>
							 <li><a href="">团队介绍</a></li>
							 <li><a href="">加入我们</a></li>
							 <li><a href="">大事记</a></li>
							 <li><a href="">联系我们</a></li>
							</ul>
						</div>
						<div className="jj-ftop-m clear">
							<div>
								<img src="https://static.pp100.com/static/public/images/wximg02.jpg"/>
								<p>关注微信订阅号</p>
							</div>
							<div>
								<img src="https://static.pp100.com/static/public/images/wximg01.jpg"/>
								<p>关注微信服务号</p>
							</div>
							<div>
								<img src="https://static.pp100.com/static/public/images/app.jpg"/>
								<p>下载手机app</p>
							</div>
						</div>
						<div className="jj-ftop-r">
							<p>客服热线</p>
							<ul>
								<li>
									<span>400-830-7266</span>
								</li>
								<li>
									<span>工作日 09:00~19:00</span>
								</li>
							</ul>
						</div>
					</div>
					<div className="jj-footer-con">
						<div className="clear jj-fc-t">
							<ul>
								<li><p>公司地址：深圳市福田区商报东路英龙商务中心11F</p></li>
								<li><p>企业邮箱：pp100@pp100.com</p></li>
								<li><p>商务合作：0755-83196888</p></li>
								<li><p>商务合作邮箱：bd@pp100.com</p></li>
								
							</ul>
						</div>
						<div className="clear jj-fc-b">
							<ul>
								<li>友情链接</li>
								<li><a target="_blank" href="https://www.pp100.com/front/InvestmentFinancing/home">投资理财资讯</a></li>
								<li><a target="_blank" href="http://www.p2peye.com" rel="nofollow">网贷天眼</a></li>	
								<li><a target="_blank" href="http://www.wdzj.com/">网贷之家</a></li>	
								<li><a target="_blank" href="http://www.hsbank.com.cn/" rel="nofollow">徽商银行</a></li>
								<li><a target="_blank" href="http://www.01caijing.com/" rel="nofollow">零壹财经</a></li>					
							</ul>
						</div>
					</div>
					<div className="jj-footer-bot">
						<ul className="clear">
							<li><a target="_blank" href="http://webscan.360.cn/index/checkwebsite/url/www.pp100.com" ></a></li>
							<li><a target="_blank" href="https://ss.knet.cn/verifyseal.dll?sn=e15063044030059261wpkf000000&amp;ct=df&amp;a=1&amp;pa=0.7451729078976979"></a></li>
							<li><a target="_blank" href="https://credit.szfw.org/CX20150608010265010813.html"></a></li>
							<li><a target="_blank" href="http://v.pinpaibao.com.cn/authenticate/cert/?site=www.pp100.com&amp;at=business"></a></li>
							<li><a target="_blank" href="http://szcert.ebs.org.cn/ea8a7325-64d1-4b1c-b252-63d58f7ddc43" title=""></a></li>
							<li><a target="_blank" href="https://cert.ebs.org.cn/ea8a7325-64d1-4b1c-b252-63d58f7ddc43.html" title=""></a></li>
						</ul>
						<p>
							深圳市壹佰金融服务有限公司CopyRight © 2016 | 备案号：
							<a target="_blank" href="http://www.miibeian.gov.cn/">粤ICP备15045431号</a>
							<span>市场有风险，出借需谨慎</span>
						</p>
					</div>
				</div>
				
				<div className="jj-hidbox">
					<a href="javascript:;" className="jj-hid">×</a>
					<img src="https://static.pp100.com/static/public/images/index/down_app_ewm.png" alt=""/>
				</div>
				
				<div className="jj-navbox">
					<div className="jj-wxbtn">
						<a href="javascript:;">公众号</a>
						<div className="jj-wxbox">
							<img src="https://static.pp100.com/public/images/xnew/erwm.png"/>
						</div>
					</div>
					
					<div className="jj-kfbtn">
						<a href="javascript:;">在线客服</a>
					</div>
					
					<div className="jj-bzbtn">
						<a href="javascript:;">帮助中心</a>
					</div>
					
					<div className="jj-jsbtn">
						<a href="javascript:;">计算机</a>
					</div>
					
					<div className="jj-fhbtn">
						<a href="javascript:;">回到顶部</a>
					</div>
				
				</div>
				
				
				
			</div>
			
			
		)
	}
}

export default Imp;