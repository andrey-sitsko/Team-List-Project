describe('idGeneratorServiceSpecs', function() {
   var idGeneratorService,
       user = {
         email: 'test@test.com'
       };

   beforeEach(module('idGeneratorServiceApp'));

   beforeEach(inject(function($injector) {
     idGeneratorService = $injector.get("idGeneratorService");
   }));

   describe('task id generation', function() {
     it('should return task id', function() {
       var title = 'taskTitle';
       expect(idGeneratorService.getTaskId(title, user)).not.toBe(undefined);
     });
     it('should return task id with corrrect user part', function() {
       var title = 'taskTitle',
           idUserPart = 'T_' + user.email + '_' + title;
       expect(idGeneratorService.getTaskId(title, user).indexOf(idUserPart)).toBeGreaterThan(-1);
     });
     it('should return different task id', function() {
       var title = 'taskTitle';
       expect(idGeneratorService.getTaskId(title, user)).not.toEqual(idGeneratorService.getTaskId(title, user));
     });
   });

   describe('list id generation', function() {
     it('should return list id', function() {
       var title = 'listTitle';
       expect(idGeneratorService.getTaskId(title, user)).not.toBe(undefined);
     });
     it('should return list id with corrrect user part', function() {
       var title = 'listTitle',
           idUserPart = 'L_' + user.email + '_' + title;
       expect(idGeneratorService.getListId(title, user).indexOf(idUserPart)).toBeGreaterThan(-1);
     });
     it('should return different list id', function() {
       var title = 'listTitle';
       expect(idGeneratorService.getListId(title, user)).not.toEqual(idGeneratorService.getListId(title, user));
     });
   });

   describe('subTask id generation', function() {
     it('should return getSubTaskId id', function() {
       var title = 'subTaskTitle';
       expect(idGeneratorService.getSubTaskId(title, user)).not.toBe(undefined);
     });
     it('should return getSubTaskId id with corrrect user part', function() {
       var title = 'subTaskTitle',
           idUserPart = 'ST_' + user.email + '_' + title;
       expect(idGeneratorService.getSubTaskId(title, user).indexOf(idUserPart)).toBeGreaterThan(-1);
     });
     it('should return different subTask id', function() {
       var title = 'subTaskTitle';
       expect(idGeneratorService.getSubTaskId(title, user)).not.toEqual(idGeneratorService.getSubTaskId(title, user));
     });
   });
});
