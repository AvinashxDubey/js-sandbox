try {
    console.log('we trying shit out');
    throw new Error('shit! you messed up dawg!!');
} catch (err) {
    console.error(err.message);
} finally {
    console.log('we done with this shit ykw Im sayin')
}

function a() {
    try{
        console.log('what are you doin?');
        throw new Error('error in function a');
    } catch (err) {
        console.error(err.message);
        return 'catch this shit';
    } finally {
        console.log('done with function a');
        return 'finally';  // return in finally block overrides the return from catch
    }
} 

console.log(a());