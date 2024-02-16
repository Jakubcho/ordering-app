const stripe = require('stripe')(process.env.STRIPE_SK);
import { Order } from '@/app/models/Order';
import {buffer } from 'micro';

export default async function POST(req) {
  // const sig = req.headers.get('stripe-signature');
  // let event;
  // try {
  //   event = stripe.webhooks.constructEvent(await buffer(req), sig, signSecret);
  // } catch(e){
  //   console.err('stripe error');
  //   console.log(e);
  //   return Response.json(e, {status:400});
  // }
  // const metadata = event?.data?.object?.orderId;

  // if(event.type === 'checkout.session.completed'){
  //   const orederId = event?.data?.object?.metadata?.orderId;
  //   const isPaid = event?.data?.object?.payment_status === 'paid';
  //   if(isPaid){
  //     await Order.updateOne({_id:orderId}, {paid:true})
  //   }
  // }

  console.log('Post ');
}
