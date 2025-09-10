MRF (MAP, REDUCE, FILTER)
✅ Map

Definition:
The map() method does not change the original array; it creates a new array.
If the array contains objects, the new array contains references to the same objects.
Modifying an object in the new array will affect the original object, but the change is caused by the modification itself, not by map().

Syntax:

{emojipedia.map(createEntry)}

✅ Filter

Definition:
It simply filters the array based on a condition.
Unlike map(), it does not create references to the original objects for primitive values.
However, when dealing with objects, both filter() and map() create references to the same objects.

Syntax:

let newreduce = number.filter(x => {
    return x > 10;
});

✅ Reduce

Definition:
reduce() goes through every element in an array and combines all its elements into a single value.

Syntax:

let sum = num.reduce((x, y) => {
    return x + y;
});

           
