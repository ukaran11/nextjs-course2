import EventsSearch from '../../components/event-detail/events-search';
import EventList from '../../components/events/event-list';
import { getAllEvents } from '../../dummy-data';

const AllEventsPage = () => {
    const events = getAllEvents();
    return (
        <>
            <EventsSearch />
           <EventList items={events} />
        </>
    );
}

export default AllEventsPage;