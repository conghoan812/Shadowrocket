// @conghoan812 - Nguyễn Công Hoan

const mapping = {
  '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
  'Locket': ['Gold']
};

var ua=$request.headers["User-Agent"]||$request.headers["user-agent"],obj=JSON.parse($response.body);obj.Attention="Locket Gold - Nguyễn Công Hoan";var hoan={is_sandbox:!1,ownership_type:"PURCHASED",billing_issues_detected_at:null,period_type:"normal",expires_date:"2099-06-23T08:01:02Z",grace_period_expires_date:null,unsubscribe_detected_at:null,original_purchase_date:"2002-01-08T08:01:03Z",purchase_date:"2002-01-08T08:01:02Z",store:"app_store"},han={grace_period_expires_date:null,purchase_date:"2002-01-08T08:01:02Z",product_identifier:"com.hoan.premium.yearly",expires_date:"2099-06-23T08:01:02Z"};const match=Object.keys(mapping).find(e=>ua.includes(e));if(match){let[e,s]=mapping[match];s?(han.product_identifier=s,obj.subscriber.subscriptions[s]=hoan):obj.subscriber.subscriptions["com.hoan.premium.yearly"]=hoan,obj.subscriber.entitlements[e]=han}else obj.subscriber.subscriptions["com.hoan.premium.yearly"]=hoan,obj.subscriber.entitlements.pro=han;$done({body:JSON.stringify(obj)});
