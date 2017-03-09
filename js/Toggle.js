import * as core from "./core";

class Toggle {
  constructor ( $node, $className ) {
    this.$node = $node;
    this.isOpen = false;
    this.$className = $className;

    // this.$node.detach();
  }

  open () {
    this.isOpen = true;

    core.dom.html.addClass( `${this.$className}` );
    // core.dom.body.append( $this.$node );
  }
  close () {
    this.isOpen = false;

    core.dom.html.removeClass( `${this.$className}` );
    // this.$node.detach();
  }
  toggle () {
    if ( this.isOpen ) {
      this.close();
    } else {
      this.open();
    }
  }
}

export default Toggle;
