<script>
  const Icon = {
    name: 'icon',
    props: {
      iconHtml: {
        type: String,
        default: '',
        required: false,
      },
    },
    render() {
      return (<div>
        {this.iconHtml}
        </div>)
    },
  }

  // eslint-disable-next-line vue/require-direct-export
  export default Icon
</script>
