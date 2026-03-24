(function() {
    const defaultReview = "https://blog.johnmuyuan.top/preview/shared-posts/5d720fbb48e644a3be33a51450052485";
    
    // 全量数据配置表 
    const vpsConfig = {
        "中国香港HKT家宽 速达云": { "remark": "动态家宽", "gold": false, "isStock": true, "shop": "https://cloud.sudatech.store/index.php?rp=/store/hktnat", "review": "", "desc": "优质的香港 HKT 动态家宽节点，原生 IP 加持，解锁各项港区流媒体能力一流，非常适合作为主力落地机使用。" },
        "HKLite HKLite-One(番茄特供)": { "remark": "便宜量大管饱", "gold": true, "isStock": false, "shop": "https://akile.io/console/pushshop", "review": "", "desc": "Akile 特供款香港节点，主打一个性价比极高、流量管饱。虽然经常缺货，但抢到就是赚到，非常适合重度冲浪选手。" },
        "HK EPYC VPS Netflix - HK 256M VPS": { "remark": "一刀落地", "gold": true, "isStock": "end", "shop": "#", "review": "", "desc": "经典的香港极简配置落地机，配置不高但价格极速下潜。主要用于低成本解锁 Netflix 等流媒体，目前已是绝版传家宝。" },
        "香港BGP VPS - HKBGP VPS Lite": { "remark": "备用落地", "gold": false, "isStock": true, "shop": "https://renet.tw/cart.php?a=confproduct&i=0?aff=87", "review": "", "desc": "香港 BGP 直连线路轻量版，网络表现均衡，适合做常规备用落地，在主力机抽风时能随时顶上。" },
        "中国香港HKsad Pro国庆神奇款": { "remark": "8C8G50M", "gold": true, "isStock": "end", "shop": "#", "review": "", "desc": "国庆期间推出的限定“神奇款”，给到了 8C8G50M 这种极其离谱的大杯配置，性能强劲，现已绝版不再售卖。" },
        "GoMami HKG": { "remark": "联通不推荐买", "gold": false, "isStock": true, "shop": "https://idc.shota.lol/index.php?rp=/store/gomami-hk", "review": "", "desc": "香港节点，移动和电信表现尚可，但由于路由策略问题，联通用户的体验较差，所以联通宽带用户请谨慎入手。" },
        "HKT-Nano": { "remark": "折价家宽", "gold": true, "isStock": true, "shop": "https://miaomiao.moe/cart.php?a=confproduct&i=0?aff=278", "review": "", "desc": "喵喵家的折价 HKT 动态家宽系列，轻量级的流媒体解锁神机，对普通看剧刷网页的用户来说性价比很高。" },
        "HGC - Nano": { "remark": "折价家宽", "gold": true, "isStock": true, "shop": "https://miaomiao.moe/cart.php?a=confproduct&i=1?aff=278", "review": "", "desc": "同样出自喵喵家，这次是 HGC 的网络。折价特供，适合对 HGC 线路有特殊解锁需求的进阶玩家。" },
        "HK BGP Global - Storage - Debut 2T": { "remark": "半价大盘鸡", "gold": true, "isStock": true, "shop": "https://console.zouter.io/products/cvm", "review": "", "desc": "来自 Zouter 的香港特惠存储型大盘鸡，自带 2TB 超大空间，非常适合用来跑 PT、做离线下载或是当个人网盘。" },
        "TW E5 HINET LXC IPv6 - TW 512 LXC": { "remark": "一刀家宽", "gold": true, "isStock": "end", "shop": "#", "review": "", "desc": "极致便宜的台湾 Hinet 动态家宽！基于 LXC 虚拟化且只有 IPv6，解锁巴哈姆特、动画疯等台区神器的究极低成本方案。" },
        "JPHyper JPHyper-One(番茄特供)": { "remark": "廉价落地", "gold": false, "isStock": false, "shop": "https://akilecloud.com/shop/server?type=traffic&areaId=5&nodeId=25&planId=949&aff_code=6a12e871-c92d-482f-8c8f-e015716e2854", "review": "", "desc": "日本廉价落地特供版，路由没怎么优化，需要你自己搭配优质的中转机来拉，能以极低成本获得日本本土 IP。" },
        "Special Offer - US-SLC-Perf-51Special": { "remark": "廉价量大", "gold": false, "isStock": false, "shop": "https://portal.ggvision.net/index.php?rp=/store/special-offer/usperf-51special", "review": "", "desc": "美国盐湖城（SLC）机房的特别促销款，主打一个带宽充裕、流量管饱，适合做大流量消耗型业务。" },
        "SJCBGP-One 周年庆 第三蛋": { "remark": "传家宝", "gold": true, "isStock": "end", "shop": "#", "review": "", "desc": "圣何塞 BGP 线路的周年庆限定活动机型（第三弹），配置和续费价格都相当诱人，目前已成为一代经典传家宝。" },
        "美国runcloud公益免费": { "remark": "免费机", "gold": false, "isStock": false, "shop": "https://run.freecloud.ltd/cart", "review": "", "desc": "Runcloud 提供的美国公益免费小鸡，适合零成本上车练手、建简单博客或者挂个探针装点门面。" },
        "F佬的免费家宽鸡": { "remark": "免费机", "gold": true, "isStock": "end", "shop": "#", "review": "", "desc": "大佬私人赞助的免费家宽节点，极度稀有！解锁能力毋庸置疑，能上车的都是天选之子。" },
        "美国洛杉矶8区Nano搬瓦工": { "remark": "切下来的Mega", "gold": true, "isStock": false, "shop": "https://www.lxc.wiki/shop/1/26", "review": "", "desc": "著名的“搬瓦工切片机”，通过 LXC 虚拟化将高昂的搬瓦工带宽化整为零卖给你，让你能廉价体验顶级线路。" },
        "新加坡7区 Basic": { "remark": "备用线路", "gold": false, "isStock": false, "shop": "https://lxc.lazycat.wiki/cart?fid=4&gid=39/aff/TZGECARC", "review": "", "desc": "位于新加坡的基础 LxC 小鸡，主要用作备用线路，适合预算有限又需要东南亚节点的用户。" },
        "LAX.AN4.Pro.PalmSpring": { "remark": "大妈好机", "gold": true, "isStock": false, "shop": "https://www.dmit.io/cart.php?a=add&pid=182", "review": "", "desc": "出自高端大厂 DMIT 的洛杉矶 Pro 系列（棕榈泉），走的是最顶级的 CN2 GIA/CMIN2 线路，晚高峰依然稳如老狗。" },
        "LAX.AN4.EB.CORONA": { "remark": "大妈好机", "gold": true, "isStock": false, "shop": "https://www.dmit.io/cart.php?a=add&pid=218", "review": "", "desc": "DMIT 的洛杉矶 Eyeball (EB) 线路机型，三网回程优化良好，是性价比与速度平衡得非常出色的热门机器。" },
        "US.LA.TRI.Basic": { "remark": "备用好鸡", "gold": true, "isStock": false, "shop": "https://app.vmiss.com/store/us-los-angeles-tri?aff=4743", "review": "", "desc": "V.PS 出品的洛杉矶三网优化基础款，价格公道，稳定性有口皆碑，作为美西常备备用机是极佳的选择。" },
        "Sad-us plus CN2 Year": { "remark": "传家宝", "gold": true, "isStock": "end", "shop": "#", "review": "", "desc": "极具年代感的一台美国 CN2 传家宝，稳定性和稀缺性拉满，属于那种“传给孙子还能建站”的神级小鸡。" },
        "Specials - Black Friday Flash Offer 2GB RAM VPS (2025)": { "remark": "玩具机", "gold": false, "isStock": false, "shop": "https://www.colocrossing.com/", "review": "", "desc": "ColoCrossing (CC机房) 的黑五闪购款，2GB 内存虽然大，但线路非常普通，适合用来做无脑刷流量的玩具。" },
        "Specials - Black Friday Flash Offer 4GB RAM VPS (40TB BW) (2025)": { "remark": "玩具机", "gold": false, "isStock": false, "shop": "https://www.colocrossing.com/", "review": "", "desc": "CC 机房黑五的另一只大流量怪兽，直接给了夸张的 40TB 流量和 4G 内存。不用心疼，当下载机使劲造就完事了。" },
        "Us-Kvm-ipv4-D組 - US-Simple-0.5G-40": { "remark": "超便宜小鸡", "gold": true, "isStock": "end", "shop": "#", "review": "", "desc": "便宜到极致的美国 KVM 小鸡，麻雀虽小五脏俱全，日常用来做个简单的科学计算或挂机宝完全没问题。" },
        "LAXHyper-Mini": { "remark": "量大落地", "gold": false, "isStock": true, "shop": "https://akilecloud.com/shop/server?type=traffic&areaId=2&nodeId=12&planId=842&aff_code=6a12e871-c92d-482f-8c8f-e015716e2854", "review": "", "desc": "洛杉矶大流量落地节点，没有做昂贵的回国线路优化，但是流量给得极为慷慨，特别适合搭配专线中转起飞。" },
        "美国洛杉矶标准版": { "remark": "ATT家宽", "gold": true, "isStock": true, "shop": "https://www.vircs.com/products/4?vcd=85ced5d8", "review": "", "desc": "带有一条高贵的美国 ATT 家宽 IP 的机器，在对付风控极其严格的美国流媒体和网银业务时有着奇效。" },
        "USBGP OneTerm": { "remark": "主力落地", "gold": true, "isStock": true, "shop": "https://dash.lain.sh/checkout/config/26?ref=JohnMY", "review": "", "desc": "Lain 家的主打款美国 BGP 落地机，带宽大且国际互联体验好，是很多人用来跑大流量业务的主力机器。" },
        "SG2 256 VPS SG2 EPYC VPS Netflix": { "remark": "一刀落地", "gold": true, "isStock": "end", "shop": "#", "review": "", "desc": "传说中的“一刀”神机，虽然只有 256M 内存，但它的价值全在解锁新加坡 Netflix 等流媒体上，性价比爆棚。" },
        "台湾Hinet NAT - HiNet NAT Lite": { "remark": "动态家宽", "gold": true, "isStock": false, "shop": "https://renet.tw/index.php/store/taiwan-hinet-nat?aff=87", "review": "", "desc": "基于共享 IPv4 的台湾 Hinet 动态家宽 NAT 机器，虽然不独立，但解锁台区各大影视资源依然是一把好手。" },
        "Singapore BGP": { "remark": "首年半价", "gold": false, "isStock": true, "shop": "https://dash.lain.sh/checkout/config/38?ref=JohnMY", "review": "", "desc": "Lain 家新加坡节点的首年促销款。新加坡 BGP 线路连东南亚速度一流，适合有亚太区业务需求的用户。" },
        "俄罗斯Telia LXC ①区-1C256M": { "remark": "玩具机", "gold": false, "isStock": false, "shop": "https://www.starvm.cn/cart?fid=34&gid=316", "review": "", "desc": "位于战斗民族的俄罗斯节点，走的 Telia 线路。这是一台彻头彻尾的廉价玩具鸡，适合拿来做各种奇奇怪怪的折腾。" },
        "United Kingdom - TINY": { "remark": "黑五款", "gold": false, "isStock": false, "shop": "https://www.bagevm.com/index.php?rp=/store/united-kingdom-servers?aff=979", "review": "", "desc": "黑五期间推出的英国微型（TINY）小鸡，适合需要干净的英国本土 IP 来注册 TikTok、英国区 PayPal 等业务的人。" },
        "宁波电信 游戏云 4C16G · 无限流量": { "remark": "MC服务器", "gold": true, "isStock": true, "shop": "https://www.starvm.cn/aff/MEWMDHAU", "review": "", "desc": "一台血统纯正的国内高配“游戏云”。4核16G加上无限流量的宁波电信宽带，用来和朋友开个 MC 服务器简直完美。" },
        "JP.TYO.BGP.Akiba": { "remark": "亚洲直连优化", "gold": false, "isStock": "end", "shop": "#", "review": "", "desc": "位于日本东京秋叶原的节点，对亚洲地区的路由有做针对性优化，延迟极低，玩日服游戏或日常访问非常舒服。" },
        "CloudCone 2025年情人节促销": { "remark": "啥都装的机", "gold": false, "isStock": false, "shop": "https://app.cloudcone.com.cn/vps/374/create?token=vday-25-vps-1", "review": "", "desc": "2025 年情人节 CC 机房放出的特惠机。一如既往的稳定和庞大存储空间，建站、图床、代理啥都能往里塞。" },
        "中国香港 HKLite HKLite-高级竞技A": { "remark": "无限流量10G口", "gold": true, "isStock": false, "shop": "https://akilecloud.com/shop/server?type=traffic&areaId=3&nodeId=1&planId=995&aff_code=6a12e871-c92d-482f-8c8f-e015716e2854", "review": "", "desc": "神仙级别的香港竞技款机器！极其狂野的 10Gbps 超大口子且不限流量，完全就是给重度跑大流量玩家准备的核武。" },
        "3th-Birthday-1C512RAM-KVM-Premium-LA": { "remark": "备用优化", "gold": false, "isStock": "end", "shop": "#", "review": "", "desc": "某商家三周年推出的洛杉矶优化线路促销款（Premium-LA），日常跑起来非常顺滑，绝版的备用好机器。" },
        "Year Us-Eagle Lv2": { "remark": "备用落地", "gold": false, "isStock": false, "shop": "https://sadidc.com/aff/BESOYDJN", "review": "", "desc": "美国的老鹰机房节点（Lv2版），性能中规中矩，可以安安静静地做一台本分的美国落地备用机。" },
        "美国Lite": { "remark": "绝版五元机", "gold": true, "isStock": false, "shop": "https://bestvm.cloud/store/us1", "review": "", "desc": "圈内赫赫有名的 BestVM 绝版“5元神机”，一杯奶茶钱就能用一年的神话，虽然是 Lite 版但性价比早就突破天际了。" },
        "HiNet-Nano": { "remark": "六折动态家宽", "gold": true, "isStock": false, "shop": "https://miaomiao.moe/index.php?rp=/store/hinet-nat/hinet-nano", "review": "", "desc": "喵喵家的台湾 Hinet 动态家宽特惠打折版（Nano级别），六折入手，花小钱办大事，解锁能力杠杠的。" },
        "日本BGP-Lite-1T": { "remark": "半价落地", "gold": false, "isStock": true, "shop": "https://bestvm.cloud/cart.php?a=confproduct&i=0", "review": "", "desc": "BestVM 家的半价日本节点，每个月有 1TB 的充足流量，作为主力或者中继节点的落地端都很合适。" },
        "Free Toys - Hetzner Finland Nat": { "remark": "免费机", "gold": false, "isStock": true, "shop": "https://idc.shota.lol/index.php?rp=/store/free-toys", "review": "", "desc": "寄宿在 Hetzner 芬兰机房的白嫖玩具机，虽然是 NAT 但性能绝对能打，只要能抢到，就是纯纯的良心福利。" },
        "Global Basic": { "remark": "八家宽出口 半价款", "gold": true, "isStock": false, "shop": "https://lxc.lazycat.wiki/cart?fid=28/aff/TZGECARC", "review": "", "desc": "缝合怪级别的全球家宽出口节点，包含了足足八条家宽出口线路，流媒体解锁能力无死角覆盖，半价入手极度超值。" }
    };

    function createFooterElement(vpsData, extraClass = "", isDetail = false) {
        const data = vpsData;
        const footer = document.createElement('div');
        footer.className = `nz-custom-footer ${extraClass}`;
        
        const remarkClass = data.gold ? "nz-remark-text-tag remark-gold-mode" : "nz-remark-text-tag";
        
        let stockClass, stockText, btnClass, btnText;
        if (data.isStock === true) {
            stockClass = "stock-in"; stockText = "● 有货";
            btnClass = "btn-buy-now"; btnText = "去抢购";
        } else if (data.isStock === "end") {
            stockClass = "stock-discontinued"; stockText = "✖ 已下架";
            btnClass = "btn-discontinued"; btnText = "已下架";
        } else {
            stockClass = "stock-out"; stockText = "○ 无货";
            btnClass = "btn-wait"; btnText = "去守候";
        }

        const reviewUrl = data.review && data.review.length > 5 ? data.review : defaultReview;
        const descText = (data.desc && data.desc.trim() !== "") ? data.desc : "还在思索中...";

        let htmlStr = ``;
        if (isDetail) htmlStr += `<div class="nz-detail-top-row">`;

        htmlStr += `
            <div class="nz-remark-box">
                <span class="${remarkClass}">${data.remark}</span>
            </div>
            <div class="nz-right-part">
                <span class="nz-stock-tag ${stockClass}">${stockText}</span>
                <div class="nz-btns">
                    <a class="btn-eval" target="_blank" onclick="event.stopPropagation()" href="${reviewUrl}">测评</a>
                    <a class="${btnClass}" target="_blank" onclick="${data.isStock === 'end' ? 'return false;' : 'event.stopPropagation()'}" href="${data.shop}">${btnText}</a>
                </div>
            </div>
        `;

        if (isDetail) {
            htmlStr += `</div><div class="nz-desc-box">💡 <strong>机器介绍：</strong>${descText}</div>`;
        }

        footer.innerHTML = htmlStr;
        return footer;
    }

    // 1. 注入首页服务器卡片
    function injectCardInfo() {
        const cards = document.querySelectorAll('.cursor-pointer.lg\\:flex-row, .cursor-pointer.flex-col');
        cards.forEach(card => {
            if (card.querySelector('.nz-custom-footer')) return;
            const nameEl = card.querySelector('p.font-bold');
            if (!nameEl) return;
            const sName = nameEl.innerText.trim();

            if (vpsConfig[sName]) {
                const footer = createFooterElement(vpsConfig[sName], "", false);
                card.appendChild(footer);
            }
        });
    }

    // 2. 注入详情页的最顶部
    function injectDetailInfo() {
        // 第一道防线：如果在首页，清空所有详情页面板
        if (document.body.innerText.includes('服务器总数')) {
            document.querySelectorAll('.nz-detail-custom-footer').forEach(el => el.remove());
            return;
        }

        for (const sName in vpsConfig) {
            const matches = [];
            const allEls = document.querySelectorAll('h1, h2, h3, p, span, div, strong, b');
            
            for (let el of allEls) {
                if (el.innerText && el.innerText.trim() === sName) {
                    matches.push(el);
                }
            }

            const deepestMatches = matches.filter(el => {
                return !Array.from(el.children).some(child => child.innerText && child.innerText.trim() === sName);
            });

            for (let el of deepestMatches) {
                if (el.closest('.cursor-pointer.lg\\:flex-row') || el.closest('.cursor-pointer.flex-col')) continue;
                if (el.closest('.nz-custom-footer')) continue;

                let headerRow = el;
                for (let i = 0; i < 4; i++) {
                    if (headerRow.parentElement && headerRow.parentElement.classList.contains('flex')) {
                        headerRow = headerRow.parentElement;
                        break;
                    } else if (headerRow.parentElement) {
                        headerRow = headerRow.parentElement;
                    }
                }

                if (!headerRow.previousElementSibling || !headerRow.previousElementSibling.classList.contains('nz-detail-custom-footer')) {
                    const footer = createFooterElement(vpsConfig[sName], "nz-detail-custom-footer", true);
                    headerRow.parentNode.insertBefore(footer, headerRow);
                }
            }
        }

        // ==========================================
        // 【强制去重，只保留最上面的一个面板】
        // ==========================================
        const allDetailPanels = document.querySelectorAll('.nz-detail-custom-footer');
        if (allDetailPanels.length > 1) {
            for (let i = 1; i < allDetailPanels.length; i++) {
                allDetailPanels[i].remove();
            }
        }
    }

    const observer = new MutationObserver(() => {
        window.requestAnimationFrame(() => {
            injectCardInfo();
            injectDetailInfo();
        });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
    
    injectCardInfo();
    injectDetailInfo();
})();