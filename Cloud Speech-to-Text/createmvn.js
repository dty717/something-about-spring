var Mvn=function(groupId,artifactId){
    if(!groupId){
        console.log("Error:groupId not defined");
        this.groupId="com.mycompany.app";
    }else{
        this.groupId=groupId;
    }
    if(!artifactId){
        console.log("Error:artifactId not defined");
        this.artifactId="my-app";
    }else{
        this.artifactId=artifactId;
    }
}
//mvn archetype:generate -DgroupId=com.mycompany.app -DartifactId=my-app -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=1.4 -DinteractiveMode=false
Mvn.prototype.createProject=function(){
    createProject(this.groupId,this.artifactId);
}
//cd my-app
Mvn.prototype.cd=function(){
    cd(this.artifactId);
}
//mvn package
Mvn.prototype.mvnPackage=function(){
    mvnPackage(this.groupId,this.artifactId);
}
//java -cp target/my-app-1.0-SNAPSHOT.jar com.mycompany.app.App
Mvn.prototype.run=function(){
    run(this.groupId,this.artifactId);
}

function insertStr(str){
    var start;
    var range=editor.getSelectionRange()
    if(range.start.row<range.end.row){
        start=range.start
    }else if(range.start.row>range.end.row){
        start=range.end;
    }else if(range.start.column<range.end.column){
        start=range.start
    }else{
        start=range.end;
    }
    if(!editor.getSelectionRange().isEmpty()){
        editor.remove();
    }
    editor.session.insert({row:start.row, column:start.column}, str);
}

function createProject(_groupId,_artifactId){
    if(!editor){
        return;
    }
    var selected=editor.getSelectedText().trim();
    var groupId;
    var artifactId;
    if(_groupId){
        groupId=_groupId;
    }else if(selected==""){
        selected="com.mycompany.app";
        groupId="com.mycompany.app";
    }else{
        groupId=selected.split(' ',2)[0];
    }
    if(_artifactId){
        artifactId=_artifactId;
    }else{
        if(selected.split(' ',2).length==1){
            artifactId="my-app"
        }else{
            artifactId=selected.split(' ',2)[1];
        }
    }
    var str="mvn archetype:generate -DgroupId="+groupId+" -DartifactId="+artifactId+" -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=1.4 -DinteractiveMode=false";
    
    insertStr(str);
}
function cd(_artifactId){
    if(!editor){
        return;
    }
    var selected=editor.getSelectedText().trim();
    var artifactId;
    if(_artifactId){
        artifactId=_artifactId;
    }else if(selected==""){
        selected="my-app";
        artifactId="my-app";
    }else{
        artifactId=selected;
    }
    
    var str="cd "+artifactId;
    
    insertStr(str);
}
function mvnPackage(){
    if(!editor){
        return;
    }
    var str="mvn package";
    insertStr(str);
}
function run(_groupId,_artifactId){
    if(!editor){
        return;
    }
    var selected=editor.getSelectedText().trim();
    var groupId;
    var artifactId;
    if(_groupId){
        groupId=_groupId;
    }else if(selected==""){
        selected="com.mycompany.app";
        groupId="com.mycompany.app";
    }else{
        groupId=selected.split(' ',2)[0];
    }
    if(_artifactId){
        artifactId=_artifactId;
    }else{
        if(selected.split(' ',2).length==1){
            artifactId="my-app"
        }else{
            artifactId=selected.split(' ',2)[1];
        }
    }
    var str="java -cp target/"+artifactId+"-1.0-SNAPSHOT.jar "+groupId+".App"
    insertStr(str);
}

