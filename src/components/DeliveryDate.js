export default function DeliveryDate() {

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  const firstDeliveryDate = new Date();
  firstDeliveryDate.setDate(firstDeliveryDate.getDate() + 30);
  const firstMonth = months[firstDeliveryDate.getMonth()];

  const lastDeliveryDate = new Date();
  lastDeliveryDate.setDate(lastDeliveryDate.getDate() + 90);
  const lastMonth = months[lastDeliveryDate.getMonth()];
  
  return (
    <>
        {firstDeliveryDate.getFullYear() === lastDeliveryDate.getFullYear()
         ? <p>Estimated delivery: {firstMonth} - {lastMonth} {lastDeliveryDate.getFullYear()}</p>
         : <p>Estimated delivery: {firstMonth} {firstDeliveryDate.getFullYear()} - {lastMonth} {lastDeliveryDate.getFullYear()}</p>
        }
    </>
  );
}