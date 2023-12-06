export default function DeliveryInformationForm() {
  // email
  // country
  // firstname - lastname
  // street houseNumber
  // postcode - city
  return (
    <form className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="email"
        className="border-2 rounded-md p-2 w-full"
      />
      <input
        type="text"
        placeholder="country"
        className="border-2 rounded-md p-2 w-full"
      />
      <div className="flex flex-row gap-2">
        <input
          type="text"
          placeholder="firstname"
          className="border-2 rounded-md p-2 w-full"
        />
        <input
          type="text"
          placeholder="lastname"
          className="border-2 rounded-md p-2 w-full"
        />
      </div>
      <input
        type="text"
        placeholder="street and house number"
        className="border-2 rounded-md p-2 w-full"
      />
      <div className="flex flex-row gap-2">
        <input
          type="text"
          placeholder="postcode"
          className="border-2 rounded-md p-2 w-full"
        />
        <input
          type="text"
          placeholder="city"
          className="border-2 rounded-md p-2 w-full"
        />
      </div>
    </form>
  );
}
