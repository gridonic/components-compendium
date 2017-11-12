define(["require", "exports", "../service/debug/DebuggerService", "../service/NotificationService", "./AppContainer", "./ContainerBuilder"], function (require, exports, DebuggerService_1, NotificationService_1, AppContainer_1, ContainerBuilder_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class FrameworkContainerBuilder extends ContainerBuilder_1.default {
        buildDefault(isDebug) {
            this.register(AppContainer_1.default.Key.Notification, () => new NotificationService_1.default())
                .register(AppContainer_1.default.Key.Debugger, () => new DebuggerService_1.default(false));
        }
        buildDev(isDebug) {
            this.register(AppContainer_1.default.Key.Debugger, () => new DebuggerService_1.default(isDebug));
        }
        buildProd(isDebug) {
        }
        buildTest(isDebug) {
        }
        buildEnv(env, isDebug) {
        }
    }
    exports.default = FrameworkContainerBuilder;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnJhbWV3b3JrQ29udGFpbmVyQnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9qcy9zcmMvY29yZS9GcmFtZXdvcmtDb250YWluZXJCdWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUtBLCtCQUErQyxTQUFRLDBCQUFnQjtRQUV6RCxZQUFZLENBQUMsT0FBZ0I7WUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FDVCxzQkFBWSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQzdCLEdBQUcsRUFBRSxDQUFDLElBQUksNkJBQW1CLEVBQUUsQ0FBQztpQkFDL0IsUUFBUSxDQUNMLHNCQUFZLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFDekIsR0FBRyxFQUFFLENBQUMsSUFBSSx5QkFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDOUMsQ0FBQztRQUdTLFFBQVEsQ0FBQyxPQUFnQjtZQUMvQixJQUFJLENBQUMsUUFBUSxDQUNULHNCQUFZLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFDekIsR0FBRyxFQUFFLENBQUMsSUFBSSx5QkFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUdTLFNBQVMsQ0FBQyxPQUFnQjtRQUVwQyxDQUFDO1FBR1MsU0FBUyxDQUFDLE9BQWdCO1FBRXBDLENBQUM7UUFHUyxRQUFRLENBQUMsR0FBVyxFQUFFLE9BQWdCO1FBRWhELENBQUM7S0FDSjtJQWhDRCw0Q0FnQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGVidWdnZXJTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlL2RlYnVnL0RlYnVnZ2VyU2VydmljZVwiO1xuaW1wb3J0IE5vdGlmaWNhdGlvblNlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2UvTm90aWZpY2F0aW9uU2VydmljZVwiO1xuaW1wb3J0IEFwcENvbnRhaW5lciBmcm9tIFwiLi9BcHBDb250YWluZXJcIjtcbmltcG9ydCBDb250YWluZXJCdWlsZGVyIGZyb20gXCIuL0NvbnRhaW5lckJ1aWxkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbWV3b3JrQ29udGFpbmVyQnVpbGRlciBleHRlbmRzIENvbnRhaW5lckJ1aWxkZXIge1xuICAgIC8qKiBAaW5oZXJpdERvYyAqL1xuICAgIHByb3RlY3RlZCBidWlsZERlZmF1bHQoaXNEZWJ1ZzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKFxuICAgICAgICAgICAgQXBwQ29udGFpbmVyLktleS5Ob3RpZmljYXRpb24sXG4gICAgICAgICAgICAoKSA9PiBuZXcgTm90aWZpY2F0aW9uU2VydmljZSgpKVxuICAgICAgICAgICAgLnJlZ2lzdGVyKFxuICAgICAgICAgICAgICAgIEFwcENvbnRhaW5lci5LZXkuRGVidWdnZXIsXG4gICAgICAgICAgICAgICAgKCkgPT4gbmV3IERlYnVnZ2VyU2VydmljZShmYWxzZSkpO1xuICAgIH1cblxuICAgIC8qKiBAaW5oZXJpdERvYyAqL1xuICAgIHByb3RlY3RlZCBidWlsZERldihpc0RlYnVnOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIoXG4gICAgICAgICAgICBBcHBDb250YWluZXIuS2V5LkRlYnVnZ2VyLFxuICAgICAgICAgICAgKCkgPT4gbmV3IERlYnVnZ2VyU2VydmljZShpc0RlYnVnKSk7XG4gICAgfVxuXG4gICAgLyoqIEBpbmhlcml0RG9jICovXG4gICAgcHJvdGVjdGVkIGJ1aWxkUHJvZChpc0RlYnVnOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIC8vIG5vLW9wXG4gICAgfVxuXG4gICAgLyoqIEBpbmhlcml0RG9jICovXG4gICAgcHJvdGVjdGVkIGJ1aWxkVGVzdChpc0RlYnVnOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIC8vIG5vLW9wXG4gICAgfVxuXG4gICAgLyoqIEBpbmhlcml0RG9jICovXG4gICAgcHJvdGVjdGVkIGJ1aWxkRW52KGVudjogc3RyaW5nLCBpc0RlYnVnOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIC8vIG5vLW9wXG4gICAgfVxufVxuIl19