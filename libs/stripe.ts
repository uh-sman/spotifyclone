import Stripe from "stripe";


export const stripe = new Stripe(
    process.env.STRIPE_SECRET_KEY ?? '',
    {
        // @ts-ignore
        apiVersion: null,
        appInfo:{
            name: 'spotify clone',
            version: '0.1.0'
        }
    }
)