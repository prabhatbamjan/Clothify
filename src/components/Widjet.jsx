
export default function Widjet({type}) {
    let data;

    if(type === "users"){
        data = {
            title: 'Users',
            isMoney: false,
            link: 'See all users',
            // icon: <PeopleAltIcon  style={{
            //     fontSize: "2rem",
                
            //   }} />

        }
    }

    if(type === "order"){
        data = {
            title: 'Orders',
            isMoney: false,
            link: 'See all orders',
            // icon: <ShoppingBagRoundedIcon style={{
            //     fontSize: "2rem",

            //   }} />

        }
    }

    if(type === "earning"){
        data = {
            title: 'Earnings',
            isMoney: true,
            link: 'View net Earnings',
            // icon: <AttachMoneyIcon style={{
            //     fontSize: "2rem",
                
            //   }} />

        }
    }

    if(type === "balance"){
        data = {
            title: 'Balance',
            isMoney: true,
            link: 'See Balance',
            // icon: <AccountBalanceWalletIcon style={{
            //     fontSize: "2rem",
                
            //   }} />

        }
    }

    return (
        <>

            <div className="widjet-card">
                <div className="left">
                    <span className="users">{data&&data.title}</span>
                    <span className="counter">{data.isMoney&& "$"}20000</span>
                    <span className="link">{data&&data.link}</span>
                </div>     
            </div>
        </>
    )
}