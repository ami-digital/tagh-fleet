<script lang="ts">
import { defineComponent, ref, h, computed } from "vue";
import moment from "moment";

export default defineComponent({
    name: "CalendarComponent",
    setup() {
        const currentDate = ref(moment());


        const nextMonth = () => currentDate.value.add(1, "month");
        const prevMonth = () => currentDate.value.subtract(1, "month");


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

        return () =>
            h("div", { class: "p-4 w-full" }, [
                // Month navigation and title
                h("div", { class: "flex justify-between items-center mb-2" }, [
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
                    { class: "grid grid-cols-7 gap-2 text-center text-gray-700 bg-white p-3 rounded shadow" },
                    [

                        ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) =>
                            h("div", { class: "font-semibold" }, day)
                        ),

                        // Calendar days
                        daysInMonth.value.map((day) => {
                            const eventsForDay = getEventsForDay(day);
                            return h(
                                "div",
                                {
                                    class: `h-16 border rounded flex flex-col justify-center items-center hover:bg-gray-200 cursor-pointer ${
                                        day.isSame(moment(), "day")
                                            ? "bg-gray-100"
                                            : day.month() !== currentDate.value.month()
                                                ? "text-gray-400"
                                                : ""
                                    }`,
                                },
                                [
                                    h(
                                        "span",
                                        { class: "text-sm font-medium" },
                                        day.date().toString()
                                    ),


                                    ...eventsForDay.map((event) =>
                                        h(
                                            "div",
                                            {
                                                class: `mt-1 w-6 h-6 flex items-center justify-center rounded-full text-xs text-white ${
                                                    event.type === "draft"
                                                        ? "bg-yellow-500"
                                                        : "bg-teal-500"
                                                }`,
                                            },
                                            event.count.toString()
                                        )
                                    ),
                                ]
                            );
                        }),
                    ]
                ),


                h("div", { class: "flex gap-4 mt-4 text-sm items-center" }, [
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
