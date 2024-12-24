<script lang="ts">
import { defineComponent, ref, h, computed } from "vue";
import moment from "moment";

export default defineComponent({
    name: "CalendarComponent",
    setup() {
        const currentDate = ref(moment()); // Start with the current date.

        const nextMonth = () => {
            currentDate.value = currentDate.value.clone().add(1, "month");
        };
        const prevMonth = () => {
            currentDate.value = currentDate.value.clone().subtract(1, "month");
        };

        const daysInMonth = computed(() => {
            const startOfMonth = currentDate.value.clone().startOf("month");
            const endOfMonth = currentDate.value.clone().endOf("month");

            const days: moment.Moment[] = [];
            let day = startOfMonth.clone().startOf("week");

            while (day.isBefore(endOfMonth.clone().endOf("week"))) {
                days.push(day.clone());
                day.add(1, "day");
            }
            return days;
        });

        const events = [
            { date: "2024-12-17", type: "draft", count: 4 },
            { date: "2024-12-17", type: "routes", count: 2 },
            { date: "2024-12-18", type: "draft", count: 5 },
        ];

        const getEventsForDay = (day: moment.Moment) => {
            return events.filter((e) => e.date === day.format("YYYY-MM-DD"));
        };

        const handleDayClick = (day: moment.Moment) => {
            alert(day.format("YYYY-MM-DD"));
        };

        return () =>
            h("div", { class: "p-4 w-full" }, [
                // Month navigation and title
                h("div", { class: "flex flex-col sm:flex-row justify-between items-center mb-2 gap-2" }, [
                    h(
                        "button",
                        {
                            class: "text-gray-600 hover:text-gray-900",
                            onClick: prevMonth,
                        },
                        "<"
                    ),
                    h("h2", { class: "text-lg font-semibold" }, [
                        currentDate.value.format("MMMM YYYY"),
                    ]),
                    h(
                        "button",
                        {
                            class: "text-gray-600 hover:text-gray-900",
                            onClick: nextMonth,
                        },
                        ">"
                    ),
                ]),

                // Calendar grid
                h(
                    "div",
                    {
                        class: "grid grid-cols-7 sm:grid-cols-7 gap-2 text-center text-gray-700 bg-white p-3 rounded shadow",
                    },
                    [
                        // Day headers
                        ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) =>
                            h("div", { class: "font-semibold text-xs sm:text-sm" }, day)
                        ),

                        // Calendar days
                        daysInMonth.value.map((day) => {
                            const eventsForDay = getEventsForDay(day);
                            return h(
                                "div",
                                {
                                    class: `h-12 sm:h-16 border rounded flex flex-col justify-center items-center hover:bg-gray-200 cursor-pointer ${
                                        day.isSame(moment(), "day")
                                            ? "bg-blue-100"
                                            : day.month() !== currentDate.value.month()
                                                ? "text-gray-400"
                                                : ""
                                    }`,
                                    onClick: () => handleDayClick(day),
                                },
                                [
                                    // Day number
                                    h(
                                        "span",
                                        { class: "text-xs sm:text-sm font-medium" },
                                        day.date().toString()
                                    ),

                                    // Events container
                                    eventsForDay.length > 0 &&
                                    h(
                                        "div",
                                        {
                                            class: "flex flex-wrap gap-1 sm:gap-2 mt-1 sm:mt-2 justify-center items-center",
                                        },
                                        eventsForDay.map((event) =>
                                            h(
                                                "div",
                                                {
                                                    class: `w-4 h-4 sm:w-3 sm:h-3 lg:w-6 lg:h-6 flex items-center justify-center rounded-full text-[10px] sm:text-xs lg:text-sm text-white ${
                                                        event.type === "draft"
                                                            ? "bg-yellow-500"
                                                            : "bg-teal-500"
                                                    }`,
                                                    style: {
                                                        minWidth: "1rem", // Ensures a consistent circular size
                                                        minHeight: "1rem",
                                                    },
                                                },
                                                event.count.toString()
                                            )
                                        )
                                    ),
                                ]
                            );
                        })

    ]
                ),

                // Legend
                h("div", { class: "flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4 text-xs sm:text-sm items-center" }, [
                    h("div", { class: "flex items-center gap-1" }, [
                        h("div", {
                            class: "w-4 h-4 rounded-full bg-yellow-500 inline-block",
                        }),
                        "Draft plans",
                    ]),
                    h("div", { class: "flex items-center gap-1" }, [
                        h("div", {
                            class: "w-4 h-4 rounded-full bg-teal-500 inline-block",
                        }),
                        "Routes sent to drivers",
                    ]),
                ]),
            ]);
    },
});
</script>

<style scoped>
button {
    @apply px-2 py-1 rounded;
}
</style>
