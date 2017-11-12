export default class Container {
    constructor() {
        this.registration = {};
        this.instances = {};
    }
    build(builder, env, isDebug) {
        builder.build(this, env, isDebug);
    }
    register(name, init) {
        this.registration[name] = init;
        return this;
    }
    get(name) {
        if (!(name in this.instances)) {
            if (!(name in this.registration)) {
                throw new Error(`Service ${name} is not registered!`);
            }
            this.instances[name] = this.createInstance(this.registration[name]);
        }
        return this.instances[name];
    }
    createInstance(init) {
        return init();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2pzL3NyYy9Db3JlL0NvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsT0FBTztJQUFkO1FBQ1ksaUJBQVksR0FBa0MsRUFBRSxDQUFDO1FBQ2pELGNBQVMsR0FBNEIsRUFBRSxDQUFDO0lBNEJwRCxDQUFDO0lBdkJVLEtBQUssQ0FBQyxPQUF5QixFQUFFLEdBQVcsRUFBRSxPQUFnQjtRQUNsRSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVNLFFBQVEsQ0FBQyxJQUFZLEVBQUUsSUFBZTtRQUN6QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxHQUFHLENBQUksSUFBWTtRQUN0QixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixNQUFNLElBQUksS0FBSyxDQUFDLFdBQVcsSUFBSSxxQkFBcUIsQ0FBQyxDQUFDO1lBQzFELENBQUM7WUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQU0sQ0FBQztJQUNyQyxDQUFDO0lBRVMsY0FBYyxDQUFDLElBQWU7UUFDcEMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2xCLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250YWluZXJCdWlsZGVyIGZyb20gXCIuL0NvbnRhaW5lckJ1aWxkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQ29udGFpbmVyIHtcbiAgICBwcml2YXRlIHJlZ2lzdHJhdGlvbjogeyBba2V5OiBzdHJpbmddOiAoKSA9PiBhbnk7IH0gPSB7fTtcbiAgICBwcml2YXRlIGluc3RhbmNlczogeyBba2V5OiBzdHJpbmddOiBhbnk7IH0gPSB7fTtcblxuICAgIC8qKlxuICAgICAqIFVzZWQgdG8gYnVpbGQgdGhlIGNvbnRhaW5lciwgcmVnaXN0ZXJpbmcgYWxsIHRoZSBkZXBlbmRlbmNpZXMgbGlrZSBzZXJ2aWNlcywgZmFjdG9yaWVzLCBwYXJhbWV0ZXJzLCAuLi5cbiAgICAgKi9cbiAgICBwdWJsaWMgYnVpbGQoYnVpbGRlcjogQ29udGFpbmVyQnVpbGRlciwgZW52OiBzdHJpbmcsIGlzRGVidWc6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICBidWlsZGVyLmJ1aWxkKHRoaXMsIGVudiwgaXNEZWJ1Zyk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyKG5hbWU6IHN0cmluZywgaW5pdDogKCkgPT4gYW55KTogQ29udGFpbmVyIHtcbiAgICAgICAgdGhpcy5yZWdpc3RyYXRpb25bbmFtZV0gPSBpbml0O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0PFQ+KG5hbWU6IHN0cmluZyk6IFQge1xuICAgICAgICBpZiAoIShuYW1lIGluIHRoaXMuaW5zdGFuY2VzKSkge1xuICAgICAgICAgICAgaWYgKCEobmFtZSBpbiB0aGlzLnJlZ2lzdHJhdGlvbikpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFNlcnZpY2UgJHtuYW1lfSBpcyBub3QgcmVnaXN0ZXJlZCFgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzW25hbWVdID0gdGhpcy5jcmVhdGVJbnN0YW5jZSh0aGlzLnJlZ2lzdHJhdGlvbltuYW1lXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXNbbmFtZV0gYXMgVDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlSW5zdGFuY2UoaW5pdDogKCkgPT4gYW55KTogYW55IHtcbiAgICAgICAgcmV0dXJuIGluaXQoKTtcbiAgICB9XG59XG4iXX0=