import _ from "lodash"

export default (values: number[], count: number) => {
    return _.round((_.sum(values)/count), 3);
} 