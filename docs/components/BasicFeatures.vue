<template>
  <div>
    <treeselect
      :multiple="false"
      :options="options"
      placeholder="Select your favourite(s)..."
      v-model="value"
      />
    <treeselect-value :value="value" />
  </div>
</template>

<script>
  export default {
    data: () => ({
      value: null,
      options: [ {
        id: 'fruits',
        label: 'Fruits',
        isSelectable: false,
        showCount: true,
        icon: 'folder',
        iconStyle: { color: '#b81b3c' },
        children: [ {
          id: 'apple',
          label: 'Apple 🍎',
          isNew: true,
        }, {
          isSelectable: false,
          id: 'grapes',
          label: 'Grapes 🍇',
        }, {
          isSelectable: false,
          id: 'pear',
          label: 'Pear 🍐',
        }, {
          isSelectable: false,
          id: 'strawberry',
          label: 'Strawberry 🍓',
        }, {
          isSelectable: false,
          id: 'watermelon',
          label: 'Watermelon 🍉',
        } ],
      }, {
        isSelectable: false,
        id: 'vegetables',
        label: 'Vegetables',
        children: [ {
          isSelectable: false,
          id: 'corn',
          label: 'Corn 🌽',
        }, {
          isSelectable: false,
          id: 'carrot',
          label: 'Carrot 🥕',
        }, {
          isSelectable: false,
          id: 'eggplant',
          label: 'Eggplant 🍆',
        }, {
          isSelectable: false,
          id: 'tomato',
          label: 'Tomato 🍅',
        } ],
      } ],
    }),
  }
</script>
