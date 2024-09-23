export const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
export const initializeTimes = (a) => a;

export function updateTimes(state, action) {
    switch (action.type) {
        case "update": {
            return times;
        }
        default:
            return state;
    }
}
