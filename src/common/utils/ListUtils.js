class ListUtils {

    static isNonEmpty(list) {
        return !!list && !!list.length;
    }

    static isEmpty(list) {
        return !this.isNonEmpty(list);
    }
}

export default ListUtils;