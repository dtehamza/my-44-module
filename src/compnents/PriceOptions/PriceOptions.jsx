
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = ({option}) => {


    const priceOptions = [
        {
          "id": 1,
          "name": "FitZone Gym",
          "plan": "Basic",
          "price": 30,
          "duration": "per month",
          "features": [
            "Access to gym equipment",
            "Locker facility",
            "Open 6am - 10pm",
            "Free Wi-Fi",
            "1 fitness assessment"
          ]
        },
        {
          "id": 2,
          "name": "FitZone Gym",
          "plan": "Standard",
          "price": 50,
          "duration": "per month",
          "features": [
            "Everything in Basic",
            "Group classes (Yoga, Zumba, HIIT)",
            "1 personal training session/month",
            "Nutritional guidance",
            "Access to mobile app"
          ]
        },
        {
          "id": 3,
          "name": "FitZone Gym",
          "plan": "Premium",
          "price": 75,
          "duration": "per month",
          "features": [
            "Everything in Standard",
            "Unlimited personal training",
            "Sauna and steam room access",
            "Body composition analysis",
            "Massage therapy discount",
            "Priority class booking"
          ]
        },
        {
          "id": 4,
          "name": "FitZone Gym",
          "plan": "Student",
          "price": 25,
          "duration": "per month",
          "features": [
            "Access to gym equipment",
            "Group classes",
            "Student ID required",
            "Study area with Wi-Fi",
            "Free protein shake/month"
          ]
        },
        {
          "id": 5,
          "name": "FitZone Gym",
          "plan": "Annual",
          "price": 500,
          "duration": "per year",
          "features": [
            "All Premium features",
            "2 months free",
            "Annual fitness review",
            "Exclusive gym merch",
            "Bring a friend free once a month"
          ]
        }
        ,
        {
            "id": 6,
            "name": "FitZone Gym",
            "plan": "Family",
            "price": 120,
            "duration": "per month",
            "features": [
              "Includes 2 adults + 2 children",
              "Access to all gym facilities",
              "Weekend family yoga classes",
              "Kids zone access",
              "Free parking"
            ]
          }
          ,
          {
            "id": 7,
            "name": "FitZone Gym",
            "plan": "Senior",
            "price": 20,
            "duration": "per month",
            "features": [
              "Age 60+ only",
              "Low-impact fitness classes",
              "Heart rate monitoring",
              "Free health checkups every 3 months",
              "Flexible workout hours"
            ]
          },
          {
            "id": 8,
            "name": "FitZone Gym",
            "plan": "Weekend Warrior",
            "price": 15,
            "duration": "per weekend",
            "features": [
              "Friday to Sunday access",
              "Gym equipment + Cardio zone",
              "Locker + Shower facility",
              "Guest pass once/month"
            ]
          },
          {
            "id": 9,
            "name": "FitZone Gym",
            "plan": "Corporate",
            "price": 40,
            "duration": "per month (per person)",
            "features": [
              "Company group enrollment",
              "Discounted personal training",
              "Team fitness challenges",
              "On-site workshop sessions",
              "Fitness reporting dashboard"
            ]
          }
      ]
      
    return (
        <div className='m-12'>
            <h2 className="text-2xl">My New gyum Centr </h2>
            <div className='grid md:grid-cols-3 gap-6'>
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;